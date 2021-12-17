import React, { useState, useReducer } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Paper, TextField, FormControlLabel, Checkbox, Card, IconButton } from '@mui/material';
import { TimeInput } from 'react-widgets/cjs';
import { LocationSearchInput } from '../user-components/LocationSearchInput';
import Dropzone from "react-dropzone";
import "react-widgets/styles.css";
import { useHistory } from "react-router-dom";
import { baseImgUrl } from '../../shared/baseUrl';

// xác thực một số trường cần thiết
const required = value => value ? undefined : <p style={{color: "red"}}>Cần thiết</p>
const maxLength = max => value =>
    value && value.length > max ? <p style={{color: "red"}}>Tối đa {max} ký tự</p> : undefined
const maxLength30 = maxLength(30)
const number = value => value && isNaN(Number(value)) ? <p style={{color: "red"}}>Trường này là một số</p> : undefined

// text field
const renderTextField = ({ label, input, type, meta: { touched, error, warning }, ...custom }) => (
    <div>
        <TextField
            variant="outlined"
            label={label}
            type={type}
            sx={{ width: '100%' }}
            {...input}
            {...custom}
        />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)

// text field for description
const renderMultilineTextField = ({ label, input, ...custom }) => (
    <TextField
        variant="outlined"
        multiline
        rows={4}
        label={label}
        sx={{ width: '100%' }}
        {...input}
        {...custom}
    />
)

// check box
const renderCheckbox = ({ input, label }) => (
    <div>
        <FormControlLabel
            control={
                <Checkbox
                    defaultChecked={false}
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                />
            }
            label={label}
        />
    </div>
)

// time picker for open time and close time
const renderTimePicker = ({ input: { onChange, value }, showTime, disabled }) =>
    <TimeInput
        onChange={onChange}
        time={showTime}
        value={!value ? null : new Date(value)}
        defaultValue={value}
        disabled={disabled}
    />

function ParkInfoForm(props) {

    const { is24hSelected, typeForm, titleForm, postInfo, postImage, initialValues, iniImages, handleRemoveIniImages, submitting } = props;
    const history = useHistory();
    const paperStyle = {
        padding: 20,
        width: '800px',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        marginBottom: "20px"
    }
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [images, setImages] = useState([]);

    // xóa một bức ảnh ở trường những ảnh đã có sẵn
    const handleRemoveIni = (image) => {
        handleRemoveIniImages(image);
    }

    // xóa một bức ảnh ở trường những tấm ảnh mới thêm vào
    const handleRemove = (image) => {
        let newImage = [...images];
        newImage.splice(images.indexOf(image), 1);
        setImages([...newImage]);
        console.log(images);
    }

    // action submit for new park form và edit info form
    async function handleSubmit(event) {
        if (typeForm == "Thêm bãi đỗ") {
            event.preventDefault();
            var success = await postInfo(props.name, props.total_space, props.location, props.price, props.hasCamera, props.hasRoof, props.allowOvernight, props.allowBooking, props.description, props.open_time, props.close_time, props.allow24h);
            if (success) {
                await postImage(success.park_id, images);
                history.push("/owner/myparks");
            }
        } else {
            event.preventDefault();
            await postInfo(props.id, props.name, props.total_space, props.location, props.price, props.hasCamera, props.hasRoof, props.allowOvernight, props.allowBooking, props.description, props.open_time, props.close_time, props.allow24h, props.removeImages);
            await postImage(props.id, images);
            history.push("/owner/info/" + props.id);
        }
    }

    // dropzone --> trường thêm file ảnh
    const renderDropzoneInput = (field) => {
        return (
            <div>
                <Dropzone
                    name={field.name}
                    onDrop={(filesToUpload) => {
                        filesToUpload.map((file) => {
                            const reader = new FileReader();
                            reader.onload = () => {
                                const fileAsBase64 = reader.result.substr(reader.result.indexOf(",") + 1);
                                if (images.length == 0) {
                                    images.push({
                                        id: 0,
                                        name: file.name,
                                        fileAsBase64: fileAsBase64
                                    });
                                } else {
                                    images.push({
                                        id: images[images.length - 1].id + 1,
                                        name: file.name,
                                        fileAsBase64: fileAsBase64
                                    });
                                }
                                forceUpdate();
                            };
                            reader.onabort = () => console.log("file reading was aborted");
                            reader.onerror = () => console.log("file reading has failed");
                            reader.readAsDataURL(file);
                        })
                        console.log(images);
                        field.input.onChange(images);
                    }
                    }
                >
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <Grid>
                                    <Card sx={{ width: 600, height: 150 }} style={{ backgroundColor: '#E8F6EF' }}>
                                        <div style={{ margin: "10px 0px 0px 230px" }}><i class="fas fa-upload fa-5x"></i></div>
                                        <p style={{ margin: "10px 0px 0px 150px" }}>Kéo thả hoặc bấm vào đây để thêm ảnh mới</p>
                                    </Card>
                                </Grid>
                            </div>
                        </section>
                    )}
                </Dropzone>
                {field.meta.touched &&
                    field.meta.error &&
                    <span className="error">{field.meta.error}</span>}

                {/* Hiển thị hình ảnh đã cũ của bãi đỗ đối với form chỉnh sửa */}
                {typeForm == "Lưu thông tin" && iniImages && Array.isArray(iniImages) && (
                    <Grid container spacing={3}>
                        {iniImages.map((image) =>
                            <Grid item xs={4}>
                                <img width='150' height='150' src={baseImgUrl + image.img} />
                                <IconButton color="success" aria-label="remove" size="large"
                                    style={{ marginBottom: "120px", marginLeft: "-20px" }}
                                    onClick={() => handleRemoveIni(image)} >
                                    <i class="fas fa-times-circle"></i>
                                </IconButton>
                            </Grid>)}
                    </Grid>
                )}
                {/* preview hình ảnh mới upload lên */}
                {images && Array.isArray(images) && (
                    <Grid container spacing={3}>
                        {images.map((image) =>
                            <Grid item xs={4}>
                                <img width='150' height='150' src={`data:image/png;base64,${image.fileAsBase64}`} />
                                <IconButton color="success" aria-label="remove" size="large"
                                    style={{ marginBottom: "120px", marginLeft: "-20px" }}
                                    onClick={() => handleRemove(image)} >
                                    <i class="fas fa-times-circle"></i>
                                </IconButton>
                            </Grid>)}
                    </Grid>
                )}
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} initialValues={initialValues}>
            <Paper className="form-review" elevation={10} style={paperStyle} >
                <Grid align='center' style={{ color: "#22577E", marginBottom: "30px" }}>
                    <h1 style={{ fontWeight: "bolder" }}>{titleForm}</h1>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <label>Tên bãi đỗ</label>
                    </Grid>
                    <Grid item xs={10}>
                        <Field name="name" component={renderTextField} label="Tên bãi đỗ" validate={[ required, maxLength30 ]} />
                    </Grid>
                    <Grid item xs={2}>
                        <label>Địa chỉ</label>
                    </Grid>
                    <Grid item xs={10}>
                        {typeForm == "Lưu thông tin" && <Field name="location" component={LocationSearchInput} defaultValue={initialValues.location} validate={ required } />}
                        {typeForm == "Thêm bãi đỗ" && <Field name="location" component={LocationSearchInput} label="Vị trí bãi đỗ" validate={ required } />}
                    </Grid>
                    <Grid item xs={2}>
                        <label>Sức chứa</label>
                    </Grid>
                    <Grid item xs={4}>
                        <Field name="total_space" component={renderTextField} label='Sức chứa (xe)' validate={[ required, number ]} />
                    </Grid>
                    <Grid item xs={1}>
                        <label>Giá</label>
                    </Grid>
                    <Grid item xs={5}>
                        <Field name="price" component={renderTextField} label='Giá (VNĐ)' validate={[ required, number ]} />
                    </Grid>
                    <Grid item xs={2}>
                        <label>Cơ sở vật chất</label>
                    </Grid>
                    <Grid item xs={2}>
                        <Field name="hasCamera" component={renderCheckbox} label="CCTV" />
                    </Grid>
                    <Grid item xs={2}>
                        <Field name="hasRoof" component={renderCheckbox} label="Mái che" />
                    </Grid>
                    <Grid item xs={3}>
                        <Field name="allowBooking" component={renderCheckbox} label="Được đặt trước" />
                    </Grid>
                    <Grid item xs={3}>
                        <Field name="allowOvernight" component={renderCheckbox} label="Gửi qua đêm" />
                    </Grid>
                    <Grid item xs={2}>
                        <label>Mô tả thêm</label>
                    </Grid>
                    <Grid item xs={10}>
                        <Field name="description" component={renderMultilineTextField} label="Mô tả chi tiết hơn về bãi đỗ của bạn" />
                    </Grid>
                    <Grid item xs={2}>
                        <label>Thời gian gửi trong ngày</label>
                    </Grid>
                    <Grid item xs={2}>
                        <Field name="allow24h" component={renderCheckbox} label="24/24" />
                    </Grid>
                    <Grid item xs={1}>
                        <label>Giờ mở</label>
                    </Grid>
                    <Grid item xs={3}>
                        <Field name="open_time" component={renderTimePicker} showTime={true} disabled={is24hSelected} />
                    </Grid>
                    <Grid item xs={1}>
                        <label>Giờ đóng</label>
                    </Grid>
                    <Grid item xs={3}>
                        <Field name="close_time" component={renderTimePicker} showTime={true} disabled={is24hSelected} />
                    </Grid>
                    <Grid item xs={2}>
                        <label>Hình ảnh</label>
                    </Grid>
                    <Grid item xs={10}>
                        <Field name="images" component={renderDropzoneInput} />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={3} style={{ marginTop: "20px" }}>
                        <button type="submit" disabled={submitting} style={{ color: "white", backgroundColor: "#2e7d32" }}>{typeForm}</button>
                    </Grid>
                </Grid>
            </Paper>
        </form >
    )
};

export default reduxForm({
    form: 'park-info-form',
    enableReinitialize: true
})(ParkInfoForm);