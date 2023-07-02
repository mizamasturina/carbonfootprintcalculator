-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 02, 2023 at 07:11 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carbon_footprint`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `comment` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `firstname`, `lastname`, `comment`) VALUES
(1, 'abc123', 'sgdgah123', 'goood'),
(2, 'tester', 'testerlast', 'Good');

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE `record` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `total_transportation_emission_year` varchar(255) NOT NULL,
  `total_electric_year` varchar(255) NOT NULL,
  `total_food_year` varchar(255) NOT NULL,
  `total_water_year` varchar(255) NOT NULL,
  `total_travel_year` varchar(255) NOT NULL,
  `total_cf_year` varchar(255) NOT NULL,
  `total_offset_year` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `record`
--

INSERT INTO `record` (`id`, `firstname`, `lastname`, `city`, `state`, `total_transportation_emission_year`, `total_electric_year`, `total_food_year`, `total_water_year`, `total_travel_year`, `total_cf_year`, `total_offset_year`) VALUES
(2, 'abc123', 'sgdgah123', 'Shah Alam', 'selangor', '0.18 tCO2/km', '-0.27 tCO2/kWh', '10.59 tCO2/kg', '0.01 tCO2/l', '0.04 tCO2/km', '10.56 tCO2e', '0.5'),
(3, 'tester', 'testerlast', 'Shah Alam', 'selangor', '2.85 tCO2/km', '0.07 tCO2/kWh', '2.72 tCO2/kg', '0.01 tCO2/l', '0.06 tCO2/km', '5.71 tCO2e', '0.3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `record`
--
ALTER TABLE `record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
