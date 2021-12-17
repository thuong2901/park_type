-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: uyu7j8yohcwo35j3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306
-- Thời gian đã tạo: Th12 17, 2021 lúc 03:12 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB-log
-- Phiên bản PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `cy44b06hnd83ypv8`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `firstname`, `lastname`, `email`, `address`, `phone`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'Parkingweb123', 'MIME', 'TYPE', 'parkingwebtest@gmail.com', NULL, NULL, NULL, '2021-12-16 08:38:23', '2021-12-16 08:38:23'),
(2, 'owner1', 'Parkingweb123', 'Nguyễn Quang', 'Huy', 'ginsama2001@gmail.com', NULL, NULL, NULL, '2021-12-16 07:41:39', '2021-12-16 07:41:39'),
(3, 'touyen123', 'Huyen30082001', 'Dương Tố', 'Uyên', '19020048@vnu.edu.vn', NULL, NULL, NULL, '2021-12-16 07:48:43', '2021-12-16 07:48:43'),
(4, 'huyenpmhbg', 'Huyen30082001', 'Nguyễn Thanh', 'Huyền', 'tretraunhamlon2001@gmail.com', NULL, NULL, NULL, '2021-12-16 07:57:28', '2021-12-16 07:57:28'),
(5, 'thumom', 'Thumomm10', 'Nguyễn', 'Thư', 'thumomm10@gmail.com', 'thị trấn thứa', '0963224945', NULL, '2021-12-16 09:04:28', '2021-12-16 09:06:33'),
(6, 'ginsama01', 'Parkingweb1234', 'Nguyễn Quang', 'Huy', 'ginsama2002@gmail.com', '8/11/92 Lê Quang Đạo, Nam Từ Liêm, Hà Nội', '0962922713', NULL, '2021-12-16 09:35:13', '2021-12-17 01:42:47'),
(7, 'anhducpn67', 'Duaboa123', 'Nguyễn Trần', 'Đức', 'anhducpn67@gmail.com', NULL, NULL, NULL, '2021-12-16 09:38:36', '2021-12-16 09:38:36'),
(8, 'abc1234', 'Abc12345', 'Hoang', 'Phuong', 'fcnrt2001@gmail.com', NULL, NULL, NULL, '2021-12-16 14:10:30', '2021-12-16 14:10:30'),
(9, 'dieppro123', 'Huyen30082001', 'Nguyễn Anh ', 'Điệp', 'anhdiepnguyen18022000@gmail.com', NULL, '0352956958', NULL, '2021-12-16 14:12:39', '2021-12-16 14:17:56'),
(10, 'nguyenthithu', 'Thumomm10', 'Móm', 'Thư', 'thumomm10@gmail.com', NULL, NULL, NULL, '2021-12-16 15:26:31', '2021-12-16 15:26:31'),
(11, 'thumomm10', 'Thumomm10', 'Leo', 'Messi', 'thumomm10@gmail.com', 'thị trấn thứa', '0963224945', NULL, '2021-12-16 15:44:41', '2021-12-16 15:45:28'),
(12, 'abc123', 'Abc12345', 'Hoang', 'Phuong', 'fcnrt2001@gmail.com', NULL, NULL, NULL, '2021-12-16 15:45:02', '2021-12-16 15:45:02'),
(13, 'accountest', 'Matkhaugicangthe1', 'Cần', 'Đỗ Xe', 'test@gmail.com', NULL, NULL, NULL, '2021-12-17 01:39:33', '2021-12-17 01:39:33');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`admin_id`, `description`, `createdAt`, `updatedAt`) VALUES
(1, NULL, '2021-12-16 08:40:41', '2021-12-16 08:40:41');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banlist`
--

CREATE TABLE `banlist` (
  `ban_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `cmt_id` int(11) NOT NULL,
  `rela_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`cmt_id`, `rela_id`, `rating`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 1, 5, 'Dịch vụ tốt', '2021-12-16 08:21:28', '2021-12-16 08:21:28'),
(2, 3, 5, 'Good', '2021-12-16 09:13:11', '2021-12-16 09:13:11'),
(4, 4, 2, 'Chất lượng rất tốt nhưng quá đắt, không có tiền, cho 2 sao', '2021-12-16 09:47:43', '2021-12-16 17:03:10'),
(5, 8, 2, 'Treo đầu dê, bán thịt chó, không có CCTV như mô tả, không đảm bảo an ninh.', '2021-12-16 15:49:18', '2021-12-16 15:49:18'),
(6, 7, 5, 'Muy satisfecho con el servicio de aparcamiento. Força Barça', '2021-12-16 15:58:19', '2021-12-16 16:00:38'),
(7, 11, 5, 'Mượn xe vào gửi chỉ để gặp Messi <3 ', '2021-12-16 16:20:42', '2021-12-16 16:20:42'),
(8, 12, 5, 'Thái độ phục vụ tốt, sẽ quay lại lần sau ', '2021-12-16 16:58:59', '2021-12-16 16:58:59'),
(9, 14, 5, NULL, '2021-12-16 17:00:53', '2021-12-16 17:00:53');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favorite`
--

CREATE TABLE `favorite` (
  `flist_id` int(11) NOT NULL,
  `rela_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `favorite`
--

INSERT INTO `favorite` (`flist_id`, `rela_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2021-12-16 08:23:48', '2021-12-16 08:23:48'),
(2, 2, '2021-12-16 08:24:30', '2021-12-16 08:24:30'),
(3, 3, '2021-12-16 09:07:48', '2021-12-16 09:07:48'),
(5, 5, '2021-12-16 09:48:02', '2021-12-16 09:48:02'),
(7, 7, '2021-12-16 15:46:07', '2021-12-16 15:46:07'),
(8, 9, '2021-12-16 16:02:57', '2021-12-16 16:02:57'),
(10, 11, '2021-12-16 16:20:54', '2021-12-16 16:20:54'),
(11, 12, '2021-12-16 16:57:30', '2021-12-16 16:57:30'),
(12, 13, '2021-12-16 16:59:28', '2021-12-16 16:59:28');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `owner`
--

CREATE TABLE `owner` (
  `own_id` int(11) NOT NULL,
  `isactivated` tinyint(4) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `owner`
--

INSERT INTO `owner` (`own_id`, `isactivated`, `createdAt`, `updatedAt`) VALUES
(2, 1, '2021-12-16 07:41:39', '2021-12-16 07:42:05'),
(3, 1, '2021-12-16 07:48:43', '2021-12-16 07:53:30'),
(8, 1, '2021-12-16 14:10:30', '2021-12-16 14:16:06'),
(9, 1, '2021-12-16 14:12:39', '2021-12-16 14:17:27'),
(10, 1, '2021-12-16 15:26:31', '2021-12-16 15:34:18');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `park`
--

CREATE TABLE `park` (
  `park_id` int(11) NOT NULL,
  `own_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_space` int(11) NOT NULL,
  `total_in` int(11) DEFAULT 0,
  `open_time` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isActivated` tinyint(4) NOT NULL DEFAULT 0,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `hasCamera` tinyint(4) NOT NULL,
  `hasRoof` tinyint(4) NOT NULL,
  `allowOvernight` tinyint(4) NOT NULL,
  `allowBooking` tinyint(4) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `park`
--

INSERT INTO `park` (`park_id`, `own_id`, `name`, `total_space`, `total_in`, `open_time`, `isActivated`, `location`, `price`, `hasCamera`, `hasRoof`, `allowOvernight`, `allowBooking`, `description`, `image_url`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'Bãi đỗ Quốc Gia', 3000, 11, '2021-12-15T22:00:00.000Z - 2021-12-16T16:00:00.000Z', 1, 'Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam', 100000, 1, 1, 1, 1, 'Bãi đỗ cấp cao dành cho cán bộ và nhân viên tham gia sự kiện tại trung tâm hội nghị Quốc gia', 'images/park-image-1-1.jpg,images/park-image-1-2.jpg,images/park-image-1-3.jpg', '2021-12-16 07:43:16', '2021-12-17 01:51:25'),
(2, 3, 'Bãi đỗ Tố Uyên', 20, 0, 'Cả ngày', 1, '238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam', 10000, 1, 1, 1, 1, 'Bãi đỗ xe rộng rãi, dễ di chuyển.', 'images/park-image-2-1.jpg', '2021-12-16 07:53:13', '2021-12-16 08:22:16'),
(3, 8, 'Bãi đỗ sông Hồng', 100, 0, 'Cả ngày', 1, 'Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam', 20, 1, 1, 0, 1, NULL, 'images/park-image-3-1.jpg,images/park-image-3-2.jpg,images/park-image-3-3.jpg', '2021-12-16 14:12:25', '2021-12-16 15:11:41'),
(4, 9, 'Bãi đỗ Dịch Vọng', 80, 0, '2021-12-15T23:00:00.000Z - 2021-12-16T15:00:00.000Z', 1, '131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam', 35000, 1, 1, 0, 1, 'Bãi đỗ xe cao tầng tiện lợi, đỗ xe, lấy xe nhanh chóng', 'images/park-image-4-1.jpg', '2021-12-16 14:21:00', '2021-12-16 15:45:24'),
(5, 10, 'Bãi đỗ Royal', 1000, 0, '2021-12-16T00:00:00.000Z - 2021-12-16T12:00:00.000Z', 1, '155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam', 10000, 1, 0, 0, 1, 'Bãi đỗ có camera an ninh, sức chứa 1000 chỗ, an toàn, view đẹp, bảo vệ thân thiện', 'images/park-image-5-1.jpg,images/park-image-5-2.jpg', '2021-12-16 15:39:49', '2021-12-16 16:05:07'),
(6, 8, 'Lina Park', 23, 0, '2021-12-15T21:00:00.000Z - 2021-12-16T16:00:00.000Z', 1, 'Ba Đình, Hanoi, Vietnam', 5000, 0, 0, 0, 0, NULL, 'images/park-image-6-1.jpg', '2021-12-16 15:42:03', '2021-12-16 16:30:42'),
(7, 8, 'Thăng Long', 23, 0, '2021-12-15T21:00:00.000Z - 2021-12-16T16:00:00.000Z', 1, 'Thăng Long, Hoàn Kiếm, Hanoi, Vietnam', 5000, 0, 0, 0, 0, NULL, 'images/park-image-7-1.jpg', '2021-12-16 15:42:03', '2021-12-16 16:31:15'),
(8, 8, 'Lá Mùa Đông', 23, 0, '2021-12-15T21:00:00.000Z - 2021-12-16T16:00:00.000Z', 1, 'Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hanoi, Vietnam', 5000, 0, 1, 0, 0, NULL, 'images/park-image-8-1.jpg', '2021-12-16 15:42:03', '2021-12-16 16:31:51'),
(9, 8, 'Bến Thành', 23, 0, 'Cả ngày', 1, 'Hanoi, Hoàn Kiếm, Hanoi, Vietnam', 5000, 0, 0, 0, 0, NULL, 'images/park-image-9-1.jpg', '2021-12-16 15:42:04', '2021-12-16 16:26:21'),
(10, 9, 'Bãi đỗ Hồ Tùng Mậu', 100, 0, 'Cả ngày', 0, '20 Đường Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội, Việt Nam', 20000, 1, 1, 0, 1, 'Bãi đỗ nằm trên trục đường lớn, dễ dàng tìm kiếm', '', '2021-12-16 15:46:24', '2021-12-16 16:55:04'),
(11, 10, 'Bãi đỗ F1', 75, 0, 'Cả ngày', 0, 'Phú Đô, Từ Liêm, Hà Nội, Việt Nam', 100000, 1, 0, 1, 1, 'Bãi đỗ nằm bên cạnh sân vận động Mỹ Đình, gần đường đua F1, thông thoáng, có camera an ninh', 'images/park-image-11-1.jpg', '2021-12-16 16:27:19', '2021-12-16 16:27:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `parking`
--

CREATE TABLE `parking` (
  `parking_id` int(11) NOT NULL,
  `rela_id` int(11) NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `parking`
--

INSERT INTO `parking` (`parking_id`, `rela_id`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 6, 'OK', '2021-12-16 14:17:16', '2021-12-16 14:17:16'),
(2, 4, 'OK', '2021-12-17 01:51:25', '2021-12-17 01:51:25');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `park_user`
--

CREATE TABLE `park_user` (
  `rela_id` int(11) NOT NULL,
  `park_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `park_user`
--

INSERT INTO `park_user` (`rela_id`, `park_id`, `user_id`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 2, 4, NULL, '2021-12-16 08:20:46', '2021-12-16 08:20:46'),
(2, 1, 4, NULL, '2021-12-16 08:24:30', '2021-12-16 08:24:30'),
(3, 2, 5, NULL, '2021-12-16 09:07:48', '2021-12-16 09:07:48'),
(4, 1, 6, NULL, '2021-12-16 09:47:43', '2021-12-16 09:47:43'),
(5, 2, 6, NULL, '2021-12-16 09:47:56', '2021-12-16 09:47:56'),
(6, 3, 6, NULL, '2021-12-16 14:14:57', '2021-12-16 14:14:57'),
(7, 5, 11, NULL, '2021-12-16 15:46:07', '2021-12-16 15:46:07'),
(8, 3, 4, NULL, '2021-12-16 15:49:18', '2021-12-16 15:49:18'),
(9, 4, 11, NULL, '2021-12-16 16:02:57', '2021-12-16 16:02:57'),
(10, 4, 5, NULL, '2021-12-16 16:06:57', '2021-12-16 16:06:57'),
(11, 5, 5, NULL, '2021-12-16 16:20:42', '2021-12-16 16:20:42'),
(12, 6, 4, NULL, '2021-12-16 16:57:30', '2021-12-16 16:57:30'),
(13, 8, 4, NULL, '2021-12-16 16:59:28', '2021-12-16 16:59:28'),
(14, 4, 4, NULL, '2021-12-16 17:00:05', '2021-12-16 17:00:05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pending`
--

CREATE TABLE `pending` (
  `pending_id` int(11) NOT NULL,
  `rela_id` int(11) NOT NULL,
  `time_start` datetime NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `pending`
--

INSERT INTO `pending` (`pending_id`, `rela_id`, `time_start`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2021-12-17 08:20:08', 'Đang đặt trước', '2021-12-16 08:20:46', '2021-12-16 08:20:46'),
(2, 3, '2021-12-17 05:11:10', 'Đang đặt trước', '2021-12-16 09:11:41', '2021-12-16 09:11:41'),
(3, 6, '2021-12-16 14:30:00', 'Chủ bãi hủy', '2021-12-16 14:14:57', '2021-12-16 14:16:58'),
(4, 6, '2021-12-16 14:30:00', 'Đã hoàn thành', '2021-12-16 14:15:57', '2021-12-16 14:17:16'),
(5, 7, '2021-12-17 15:45:40', 'Đang đặt trước', '2021-12-16 15:46:10', '2021-12-16 15:46:10'),
(6, 7, '2021-12-17 15:45:40', 'Đang đặt trước', '2021-12-16 15:58:46', '2021-12-16 15:58:46'),
(7, 14, '2021-12-17 16:56:15', 'Đang đặt trước', '2021-12-16 17:00:05', '2021-12-16 17:00:05'),
(8, 4, '2021-12-17 01:42:40', 'Chủ bãi hủy', '2021-12-17 01:40:10', '2021-12-17 01:51:14'),
(9, 4, '2021-12-17 01:42:40', 'Đã hoàn thành', '2021-12-17 01:40:18', '2021-12-17 01:51:25');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `report`
--

CREATE TABLE `report` (
  `report_id` int(11) NOT NULL,
  `rela_id` int(11) NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `search`
--

CREATE TABLE `search` (
  `search_id` int(11) NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timein` datetime DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  `parks` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`parks`)),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `search`
--

INSERT INTO `search` (`search_id`, `address`, `timein`, `lat`, `lng`, `parks`, `createdAt`, `updatedAt`) VALUES
(1, 'Hoàng Quốc Việt, Cầu Giấy, Hà Nội, Việt Nam', '2021-12-16 08:30:48', 21.046, 105.793, '[]', '2021-12-16 07:59:05', '2021-12-16 07:59:05'),
(2, 'Hoàng Quốc Việt, Cầu Giấy, Hà Nội, Việt Nam', '2021-12-18 08:00:46', 21.046, 105.793, '[]', '2021-12-16 08:00:54', '2021-12-16 08:00:54'),
(3, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 08:08:26', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.6 km\"}]', '2021-12-16 08:12:28', '2021-12-16 08:12:28'),
(4, 'Hoàng Quốc Việt, Cầu Giấy, Hà Nội, Việt Nam', '2021-12-17 08:20:08', 21.046, 105.793, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"6.3 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"1.4 km\"}]', '2021-12-16 08:20:12', '2021-12-16 08:20:12'),
(5, 'Hoàng Quốc Việt, Cầu Giấy, Hà Nội, Việt Nam', '2021-12-17 08:20:08', 21.046, 105.793, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"6.3 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"1.4 km\"}]', '2021-12-16 08:20:13', '2021-12-16 08:20:13'),
(6, 'Hoàng Quốc Việt, Cầu Giấy, Hà Nội, Việt Nam', '2021-12-17 08:20:08', 21.046, 105.793, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"6.3 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"1.4 km\"}]', '2021-12-16 08:20:13', '2021-12-16 08:20:13'),
(7, 'Hoàng Quốc Việt, Cầu Giấy, Hà Nội, Việt Nam', '2021-12-16 08:23:33', 21.046, 105.793, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"6.3 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1.4 km\"}]', '2021-12-16 08:23:36', '2021-12-16 08:23:36'),
(8, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 08:44:49', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"8.6 km\"}]', '2021-12-16 08:44:53', '2021-12-16 08:44:53'),
(9, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 09:02:48', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"8.6 km\"}]', '2021-12-16 09:02:52', '2021-12-16 09:02:52'),
(10, 'Cầu Giấy, Hà Nội, Việt Nam', '2021-12-16 09:05:46', 21.0362, 105.791, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"4.8 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"2.0 km\"}]', '2021-12-16 09:05:48', '2021-12-16 09:05:48'),
(11, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 09:06:52', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"8.6 km\"}]', '2021-12-16 09:06:54', '2021-12-16 09:06:54'),
(12, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 09:10:48', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"8.6 km\"}]', '2021-12-16 09:10:51', '2021-12-16 09:10:51'),
(13, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-17 05:11:10', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"8.6 km\"}]', '2021-12-16 09:11:34', '2021-12-16 09:11:34'),
(14, 'Amsterdam, Netherlands', '2021-12-16 09:38:59', 52.3676, 4.90414, '[]', '2021-12-16 09:39:02', '2021-12-16 09:39:02'),
(15, 'Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hanoi, Vietnam', '2021-12-16 05:22:00', 21.0064, 105.787, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"4.6667\",\"numOfRate\":3,\"distance\":\"6.1 km\"}]', '2021-12-16 09:40:55', '2021-12-16 09:40:55'),
(16, 'Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hanoi, Vietnam', '2021-12-16 05:22:00', 21.0064, 105.787, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"4.6667\",\"numOfRate\":3,\"distance\":\"6.1 km\"}]', '2021-12-16 09:40:55', '2021-12-16 09:40:55'),
(17, 'Công viên Cầu Giấy, Phố Duy Tân, Dịch Vọng, Cầu Giấy, Hà Nội, Việt Nam', '2021-12-17 09:47:03', 21.0283, 105.791, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"3.3 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"4.6667\",\"numOfRate\":3,\"distance\":\"2.9 km\"}]', '2021-12-16 09:47:07', '2021-12-16 09:47:07'),
(18, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 09:56:27', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"4.6667\",\"numOfRate\":3,\"distance\":\"8.6 km\"}]', '2021-12-16 09:56:31', '2021-12-16 09:56:31'),
(19, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 10:52:05', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"4.6667\",\"numOfRate\":3,\"distance\":\"8.6 km\"}]', '2021-12-16 10:52:08', '2021-12-16 10:52:08'),
(20, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-04 11:20:04', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"4.6667\",\"numOfRate\":3,\"distance\":\"8.6 km\"}]', '2021-12-16 11:20:06', '2021-12-16 11:20:06'),
(21, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-04 11:20:04', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"4.6667\",\"numOfRate\":3,\"distance\":\"8.6 km\"}]', '2021-12-16 11:20:06', '2021-12-16 11:20:06'),
(22, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 14:07:56', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"}]', '2021-12-16 14:08:02', '2021-12-16 14:08:02'),
(23, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 14:08:45', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"}]', '2021-12-16 14:08:49', '2021-12-16 14:08:49'),
(24, 'Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 14:13:18', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"}]', '2021-12-16 14:13:23', '2021-12-16 14:13:23'),
(25, 'Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 14:30:00', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"}]', '2021-12-16 14:14:48', '2021-12-16 14:14:48'),
(26, 'Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam', '2021-12-17 14:42:24', 21.0406, 105.79, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"5.2 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"1.5 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.7 km\"}]', '2021-12-16 14:42:28', '2021-12-16 14:42:28'),
(27, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-17 15:45:40', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.3 km\"}]', '2021-12-16 15:45:44', '2021-12-16 15:45:44'),
(28, 'Đường Hồ Tùng Mậu, Từ Liêm, Hà Nội, Việt Nam', '2021-12-17 15:47:34', 21.0383, 105.772, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"4.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"3.0 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"9.6 km\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"2.6 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"3.0 km\"}]', '2021-12-16 15:47:37', '2021-12-16 15:47:37'),
(29, 'Texas City, Texas, Hoa Kỳ', '2021-12-24 15:48:32', 29.3838, -94.9027, '[]', '2021-12-16 15:48:37', '2021-12-16 15:48:37'),
(30, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 16:01:47', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.3 km\"}]', '2021-12-16 16:01:50', '2021-12-16 16:01:50'),
(31, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-17 17:00:00', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.3 km\"},{\"id\":7,\"name\":\"Arestogan\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Terminal 3, Indira Gandhi International Airport, Niu Đê-li, Delhi, Ấn Độ\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"5,223 km\"}]', '2021-12-16 16:03:38', '2021-12-16 16:03:38'),
(32, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 16:05:22', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.3 km\"},{\"id\":7,\"name\":\"Arestogan\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Terminal 3, Indira Gandhi International Airport, Niu Đê-li, Delhi, Ấn Độ\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"5,223 km\"}]', '2021-12-16 16:05:24', '2021-12-16 16:05:24'),
(33, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 16:06:41', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.3 km\"},{\"id\":7,\"name\":\"Arestogan\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Terminal 3, Indira Gandhi International Airport, Niu Đê-li, Delhi, Ấn Độ\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"5,223 km\"}]', '2021-12-16 16:06:42', '2021-12-16 16:06:42'),
(34, 'Texas City, Texas, Hoa Kỳ', '2021-12-23 16:10:09', 29.3838, -94.9027, '[]', '2021-12-16 16:10:12', '2021-12-16 16:10:12'),
(35, 'Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-23 16:10:35', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.3 km\"},{\"id\":7,\"name\":\"Arestogan\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Terminal 3, Indira Gandhi International Airport, Niu Đê-li, Delhi, Ấn Độ\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"5,223 km\"}]', '2021-12-16 16:11:00', '2021-12-16 16:11:00'),
(36, 'Texas City, Texas, Hoa Kỳ', '2021-12-25 16:10:35', 29.3838, -94.9027, '[]', '2021-12-16 16:13:47', '2021-12-16 16:13:47'),
(37, 'Texas City, Texas, Hoa Kỳ', '2021-12-25 16:10:35', 29.3838, -94.9027, '[]', '2021-12-16 16:15:19', '2021-12-16 16:15:19'),
(38, 'Chợ Bến Thành, Đường Lê Lợi, Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Việt Nam', '2021-12-18 16:17:23', 10.7721, 106.698, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"1,708 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"1,713 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1,708 km\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1,713 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1,713 km\"},{\"id\":7,\"name\":\"Arestogan\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Terminal 3, Indira Gandhi International Airport, Niu Đê-li, Delhi, Ấn Độ\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"5,062 km\"}]', '2021-12-16 16:17:27', '2021-12-16 16:17:27'),
(39, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 16:28:05', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"7.3 km\"},{\"id\":7,\"name\":\"Arestogan\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Terminal 3, Indira Gandhi International Airport, Niu Đê-li, Delhi, Ấn Độ\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"5,223 km\"},{\"id\":9,\"name\":\"Bến Thành\",\"image\":\"images/park-image-9-1.jpg\",\"price\":5000,\"location\":\"Hanoi, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"}]', '2021-12-16 16:28:08', '2021-12-16 16:28:08'),
(40, 'Mỹ Đình, Từ Liêm, Hà Nội, Việt Nam', '2021-12-16 16:28:22', 21.0235, 105.773, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"5.0 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"5.0 km\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"4.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"5.1 km\"},{\"id\":7,\"name\":\"Arestogan\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Terminal 3, Indira Gandhi International Airport, Niu Đê-li, Delhi, Ấn Độ\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"5,227 km\"}]', '2021-12-16 16:28:24', '2021-12-16 16:28:24'),
(41, 'Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-23 16:32:16', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"7.3 km\"},{\"id\":6,\"name\":\"Lina Park\",\"image\":\"images/park-image-6-1.jpg\",\"price\":5000,\"location\":\"Ba Đình, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"4.7 km\"},{\"id\":7,\"name\":\"Thăng Long\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Thăng Long, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"},{\"id\":8,\"name\":\"Lá Mùa Đông\",\"image\":\"images/park-image-8-1.jpg\",\"price\":5000,\"location\":\"Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.9 km\"},{\"id\":9,\"name\":\"Bến Thành\",\"image\":\"images/park-image-9-1.jpg\",\"price\":5000,\"location\":\"Hanoi, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"}]', '2021-12-16 16:32:29', '2021-12-16 16:32:29'),
(42, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 16:35:29', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"7.3 km\"},{\"id\":6,\"name\":\"Lina Park\",\"image\":\"images/park-image-6-1.jpg\",\"price\":5000,\"location\":\"Ba Đình, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"4.7 km\"},{\"id\":7,\"name\":\"Thăng Long\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Thăng Long, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"},{\"id\":8,\"name\":\"Lá Mùa Đông\",\"image\":\"images/park-image-8-1.jpg\",\"price\":5000,\"location\":\"Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.9 km\"},{\"id\":9,\"name\":\"Bến Thành\",\"image\":\"images/park-image-9-1.jpg\",\"price\":5000,\"location\":\"Hanoi, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"}]', '2021-12-16 16:35:31', '2021-12-16 16:35:31'),
(43, 'Hà Nam, Liêm Chính, Phủ Lý, Hà Nam, Việt Nam', '2021-12-16 16:37:25', 20.5377, 105.933, '[]', '2021-12-16 16:37:30', '2021-12-16 16:37:30'),
(44, 'Hà Nam, Liêm Chính, Phủ Lý, Hà Nam, Việt Nam', '2021-12-16 16:38:02', 20.5377, 105.933, '[]', '2021-12-16 16:38:04', '2021-12-16 16:38:04'),
(45, 'Đường Hồ Tùng Mậu, Từ Liêm, Hà Nội, Việt Nam', '2021-12-17 16:56:15', 21.0383, 105.772, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"4.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"3.0 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"9.6 km\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"2.6 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"3.0 km\"},{\"id\":6,\"name\":\"Lina Park\",\"image\":\"images/park-image-6-1.jpg\",\"price\":5000,\"location\":\"Ba Đình, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"5.1 km\"},{\"id\":8,\"name\":\"Lá Mùa Đông\",\"image\":\"images/park-image-8-1.jpg\",\"price\":5000,\"location\":\"Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1.6 km\"},{\"id\":9,\"name\":\"Bến Thành\",\"image\":\"images/park-image-9-1.jpg\",\"price\":5000,\"location\":\"Hanoi, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"9.6 km\"}]', '2021-12-16 16:56:18', '2021-12-16 16:56:18'),
(46, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-17 17:00:44', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"3.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"7.3 km\"},{\"id\":6,\"name\":\"Lina Park\",\"image\":\"images/park-image-6-1.jpg\",\"price\":5000,\"location\":\"Ba Đình, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"4.7 km\"},{\"id\":7,\"name\":\"Thăng Long\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Thăng Long, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1.7 km\"},{\"id\":8,\"name\":\"Lá Mùa Đông\",\"image\":\"images/park-image-8-1.jpg\",\"price\":5000,\"location\":\"Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.9 km\"},{\"id\":9,\"name\":\"Bến Thành\",\"image\":\"images/park-image-9-1.jpg\",\"price\":5000,\"location\":\"Hanoi, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"}]', '2021-12-16 17:00:48', '2021-12-16 17:00:48');
INSERT INTO `search` (`search_id`, `address`, `timein`, `lat`, `lng`, `parks`, `createdAt`, `updatedAt`) VALUES
(47, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-17 17:05:12', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"7.3 km\"},{\"id\":6,\"name\":\"Lina Park\",\"image\":\"images/park-image-6-1.jpg\",\"price\":5000,\"location\":\"Ba Đình, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"4.7 km\"},{\"id\":7,\"name\":\"Thăng Long\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Thăng Long, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1.7 km\"},{\"id\":8,\"name\":\"Lá Mùa Đông\",\"image\":\"images/park-image-8-1.jpg\",\"price\":5000,\"location\":\"Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.9 km\"},{\"id\":9,\"name\":\"Bến Thành\",\"image\":\"images/park-image-9-1.jpg\",\"price\":5000,\"location\":\"Hanoi, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"}]', '2021-12-16 17:05:15', '2021-12-16 17:05:15'),
(48, '131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam', '2021-12-16 17:05:41', 21.0425, 105.79, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"5.6 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"1.2 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"7.9 km\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"1.7 km\"},{\"id\":6,\"name\":\"Lina Park\",\"image\":\"images/park-image-6-1.jpg\",\"price\":5000,\"location\":\"Ba Đình, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"3.4 km\"},{\"id\":7,\"name\":\"Thăng Long\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Thăng Long, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.1 km\"},{\"id\":8,\"name\":\"Lá Mùa Đông\",\"image\":\"images/park-image-8-1.jpg\",\"price\":5000,\"location\":\"Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1.1 km\"},{\"id\":9,\"name\":\"Bến Thành\",\"image\":\"images/park-image-9-1.jpg\",\"price\":5000,\"location\":\"Hanoi, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.9 km\"}]', '2021-12-16 17:05:43', '2021-12-16 17:05:43'),
(49, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 01:37:00', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"8.5 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"8.6 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.4 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"7.3 km\"},{\"id\":6,\"name\":\"Lina Park\",\"image\":\"images/park-image-6-1.jpg\",\"price\":5000,\"location\":\"Ba Đình, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"4.7 km\"},{\"id\":7,\"name\":\"Thăng Long\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Thăng Long, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"},{\"id\":8,\"name\":\"Lá Mùa Đông\",\"image\":\"images/park-image-8-1.jpg\",\"price\":5000,\"location\":\"Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"7.9 km\"},{\"id\":9,\"name\":\"Bến Thành\",\"image\":\"images/park-image-9-1.jpg\",\"price\":5000,\"location\":\"Hanoi, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"}]', '2021-12-17 01:37:04', '2021-12-17 01:37:04'),
(50, 'Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam', '2021-12-17 01:42:40', 21.0064, 105.787, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-3-1.jpg\",\"price\":20,\"location\":\"Hanoi, Hoàn Kiếm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"8.9 km\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"5.8 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"4.4 km\"},{\"id\":6,\"name\":\"Lina Park\",\"image\":\"images/park-image-6-1.jpg\",\"price\":5000,\"location\":\"Ba Đình, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"4.4 km\"},{\"id\":7,\"name\":\"Thăng Long\",\"image\":\"images/park-image-7-1.jpg\",\"price\":5000,\"location\":\"Thăng Long, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"10.0 km\"},{\"id\":8,\"name\":\"Lá Mùa Đông\",\"image\":\"images/park-image-8-1.jpg\",\"price\":5000,\"location\":\"Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"4.7 km\"},{\"id\":9,\"name\":\"Bến Thành\",\"image\":\"images/park-image-9-1.jpg\",\"price\":5000,\"location\":\"Hanoi, Hoàn Kiếm, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.9 km\"}]', '2021-12-17 01:39:53', '2021-12-17 01:39:53'),
(51, 'Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hanoi, Vietnam', '2021-12-29 17:00:00', 21.0367, 105.785, '[{\"id\":1,\"name\":\"Bãi đỗ Quốc Gia\",\"image\":\"images/park-image-1-1.jpg\",\"price\":100000,\"location\":\"Trung Tâm Hội Nghị Quốc Gia Việt Nam, Đường Cao Tốc 08, Mễ Trì, Nam Từ Liêm, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"2.0000\",\"numOfRate\":1,\"distance\":\"4.2 km\"},{\"id\":2,\"name\":\"Bãi đỗ Tố Uyên\",\"image\":\"images/park-image-2-1.jpg\",\"price\":10000,\"location\":\"238 Hoàng Quốc Việt, Cổ Nhuế 1, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"2.3 km\"},{\"id\":4,\"name\":\"Bãi đỗ Dịch Vọng\",\"image\":\"images/park-image-4-1.jpg\",\"price\":35000,\"location\":\"131 Nguyễn Phong Sắc, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"2.0 km\"},{\"id\":5,\"name\":\"Bãi đỗ Royal\",\"image\":\"images/park-image-5-1.jpg\",\"price\":10000,\"location\":\"155 Đường Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":2,\"distance\":\"2.6 km\"},{\"id\":6,\"name\":\"Lina Park\",\"image\":\"images/park-image-6-1.jpg\",\"price\":5000,\"location\":\"Ba Đình, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":0,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"4.7 km\"},{\"id\":8,\"name\":\"Lá Mùa Đông\",\"image\":\"images/park-image-8-1.jpg\",\"price\":5000,\"location\":\"Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hanoi, Vietnam\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"}]', '2021-12-17 01:40:16', '2021-12-17 01:40:16');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `isactivated` tinyint(4) NOT NULL,
  `penalty` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`user_id`, `isactivated`, `penalty`, `createdAt`, `updatedAt`) VALUES
(4, 1, 0, '2021-12-16 07:57:28', '2021-12-16 09:44:36'),
(5, 1, 0, '2021-12-16 09:04:28', '2021-12-16 09:16:02'),
(6, 1, 0, '2021-12-16 09:35:13', '2021-12-16 09:40:43'),
(7, 0, 0, '2021-12-16 09:38:36', '2021-12-16 09:38:36'),
(11, 1, 0, '2021-12-16 15:44:41', '2021-12-16 15:45:09'),
(12, 1, 0, '2021-12-16 15:45:02', '2021-12-16 15:47:51'),
(13, 0, 0, '2021-12-17 01:39:33', '2021-12-17 01:39:33');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Chỉ mục cho bảng `banlist`
--
ALTER TABLE `banlist`
  ADD PRIMARY KEY (`ban_email`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`cmt_id`),
  ADD KEY `rela_id` (`rela_id`);

--
-- Chỉ mục cho bảng `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`flist_id`),
  ADD KEY `rela_id` (`rela_id`);

--
-- Chỉ mục cho bảng `owner`
--
ALTER TABLE `owner`
  ADD PRIMARY KEY (`own_id`);

--
-- Chỉ mục cho bảng `park`
--
ALTER TABLE `park`
  ADD PRIMARY KEY (`park_id`),
  ADD KEY `own_id` (`own_id`);

--
-- Chỉ mục cho bảng `parking`
--
ALTER TABLE `parking`
  ADD PRIMARY KEY (`parking_id`),
  ADD KEY `rela_id` (`rela_id`);

--
-- Chỉ mục cho bảng `park_user`
--
ALTER TABLE `park_user`
  ADD PRIMARY KEY (`rela_id`),
  ADD KEY `park_id` (`park_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `pending`
--
ALTER TABLE `pending`
  ADD PRIMARY KEY (`pending_id`),
  ADD KEY `rela_id` (`rela_id`);

--
-- Chỉ mục cho bảng `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`report_id`),
  ADD KEY `rela_id` (`rela_id`);

--
-- Chỉ mục cho bảng `search`
--
ALTER TABLE `search`
  ADD PRIMARY KEY (`search_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `cmt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `favorite`
--
ALTER TABLE `favorite`
  MODIFY `flist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `park`
--
ALTER TABLE `park`
  MODIFY `park_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `parking`
--
ALTER TABLE `parking`
  MODIFY `parking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `park_user`
--
ALTER TABLE `park_user`
  MODIFY `rela_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `pending`
--
ALTER TABLE `pending`
  MODIFY `pending_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `report`
--
ALTER TABLE `report`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `search`
--
ALTER TABLE `search`
  MODIFY `search_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `account` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`rela_id`) REFERENCES `park_user` (`rela_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`rela_id`) REFERENCES `park_user` (`rela_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `owner`
--
ALTER TABLE `owner`
  ADD CONSTRAINT `owner_ibfk_1` FOREIGN KEY (`own_id`) REFERENCES `account` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `park`
--
ALTER TABLE `park`
  ADD CONSTRAINT `park_ibfk_1` FOREIGN KEY (`own_id`) REFERENCES `owner` (`own_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `parking`
--
ALTER TABLE `parking`
  ADD CONSTRAINT `parking_ibfk_1` FOREIGN KEY (`rela_id`) REFERENCES `park_user` (`rela_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `park_user`
--
ALTER TABLE `park_user`
  ADD CONSTRAINT `park_user_ibfk_1` FOREIGN KEY (`park_id`) REFERENCES `park` (`park_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `park_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `pending`
--
ALTER TABLE `pending`
  ADD CONSTRAINT `pending_ibfk_1` FOREIGN KEY (`rela_id`) REFERENCES `park_user` (`rela_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `report_ibfk_1` FOREIGN KEY (`rela_id`) REFERENCES `park_user` (`rela_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `account` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
