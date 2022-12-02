-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 28-11-2022 a las 19:42:17
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_portfolio`
--

CREATE TABLE `tbl_portfolio` (
  `portfolio_id` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `thumbnailPic` varchar(100) NOT NULL,
  `text1` text NOT NULL,
  `text2` text NOT NULL,
  `image1` varchar(100) NOT NULL,
  `image2` varchar(100) NOT NULL,
  `image3` varchar(100) NOT NULL,
  `image4` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_portfolio`
--

INSERT INTO `tbl_portfolio` (`portfolio_id`, `name`, `thumbnailPic`, `text1`, `text2`, `image1`, `image2`, `image3`, `image4`) VALUES
(1, 'Pizza Project', 'home_project1.png', 'Pizza Project Brand Change', 'This work based on a real pizzeria located in London, Ontario; uses the current slogan (Invent your Pizza) as a primary concept for its image. Elements that represent a laboratory were used, such as the test tube which replaces the letter O of the word Project and was arranged in such a way that the I of the word pizza was additional.', 'project_1_1.jpg', 'project_1_2.jpg', 'project_1_3.jpg', 'project_1_4.jpg'),
(2, 'Tilex with Mouthwash', 'home_project2.png', 'TILEX WITH MOUTH WASH. Creative exercise combining 2 unrelated brands:Peroni Beer + Tilex Disinfectant', 'This is an interesting exercise where you take 2 unrelated marks to create a new one using the values of both; The aesthetics of the Peroni brand are taken with elements such as its colorful Mediterranean, its luxurious lifestyle, full of friends and good times, added to a particular benefit inherited from the Tilex brand; This is how the first beer with mouthwash was created under the motto \'The good life deserves a smile\'.', 'project_2_1.jpg', 'project_2_2.jpg', 'project_2_3.jpg', 'project_2_4.jpg'),
(4, 'Elin Cosmetics', 'home_project3.png', 'ELIN. Brand of cosmetics with natural ingredients', 'Nature under its immense wisdom delivers ingredients that beautify people inside and out; So Elin borrows this wisdom from the land and brings it to a brand that represents beauty from its most natural facet, allowing the beauty of the consumer to look and feel natural; She is not looking for an ornate makeup but, on the contrary, a calm makeup that highlights the features of the people.', 'project_3_1.jpg', 'project_3_2.jpg', 'project_3_3.jpg', 'project_3_4.jpg'),
(6, 'Arden for Men', 'home_project4.png', 'ARDEN FOR MEN. Colombian brand of male deodorants', 'This brand has more than 50 years in the male deodorant market in Colombia. It is a brand that has gone through multiple facets and that for less than a decade has focused on the world of soccer as a territory of communication.', 'project_4_1.jpg', 'project_4_2.jpg', 'project_4_3.jpg', 'project_4_4.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  ADD PRIMARY KEY (`portfolio_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  MODIFY `portfolio_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
