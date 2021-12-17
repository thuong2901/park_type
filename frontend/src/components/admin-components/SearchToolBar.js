import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

function SearchToolbar(props) {
    return (
        <TextField
            variant="standard"
            value={props.value}
            onChange={props.onChange}
            placeholder="Tìm kiếm..."
            InputProps={{
                startAdornment: <i class="fas fa-search"></i>,
                endAdornment: (
                    <IconButton
                        title="Clear"
                        aria-label="Clear"
                        size="small"
                        style={{ visibility: props.value ? 'visible' : 'hidden' }}
                        onClick={props.clearSearch}
                    >
                        <i class="fas fa-times"></i>
                    </IconButton>
                ),
            }}
            sx={{
                width: {
                    xs: 1,
                    sm: 0.6,
                },
                m: (theme) => theme.spacing(1, 0.5, 1.5),
                '& .MuiSvgIcon-root': {
                    mr: 0.5,
                },
                '& .MuiInput-underline:before': {
                    borderBottom: 1,
                    borderColor: 'divider',
                },
            }}
        />
    );
}

SearchToolbar.propTypes = {
    clearSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default SearchToolbar;