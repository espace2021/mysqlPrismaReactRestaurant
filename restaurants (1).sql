-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 21 avr. 2024 à 17:07
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `restaurants`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(4) NOT NULL,
  `desCat` varchar(30) DEFAULT NULL,
  `imageCat` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id`, `desCat`, `imageCat`) VALUES
(2, 'GATEAU', NULL),
(3, 'HLOU', NULL),
(6, 'CROISSANT', NULL),
(7, 'CAKE', NULL),
(9, 'SALE', NULL),
(10, 'JUS', NULL),
(11, 'GLACE', NULL),
(14, 'CAFE', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `cmd`
--

CREATE TABLE `cmd` (
  `id` int(4) NOT NULL,
  `codeEmp` int(4) NOT NULL,
  `dateCmd` varchar(50) NOT NULL,
  `prixTotalCmd` double NOT NULL,
  `tableNumber` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `nomClient` varchar(50) NOT NULL,
  `depuis` varchar(50) NOT NULL,
  `verifiedByAdmin` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `cmd`
--

INSERT INTO `cmd` (`id`, `codeEmp`, `dateCmd`, `prixTotalCmd`, `tableNumber`, `status`, `nomClient`, `depuis`, `verifiedByAdmin`) VALUES
(41, 1, '1630315883799', 2.8, 1, 1, '', 'EMPLOYE', '2'),
(42, 0, '1712321452430', 1.4, NULL, 0, 'HS', 'CLIENT', ''),
(43, 4, '1712321961072', 83, 2, 1, '', 'EMPLOYE', '2'),
(44, 0, '1712322348537', 3.6, NULL, 1, 'hassan', 'CLIENT', '2');

-- --------------------------------------------------------

--
-- Structure de la table `employe`
--

CREATE TABLE `employe` (
  `id` int(4) NOT NULL,
  `matriculeEmp` varchar(10) NOT NULL,
  `nomPrenom` varchar(40) DEFAULT NULL,
  `adresse` varchar(40) DEFAULT NULL,
  `contact` varchar(30) DEFAULT NULL,
  `tel` varchar(15) DEFAULT NULL,
  `fonction` varchar(20) DEFAULT NULL,
  `login` varchar(10) DEFAULT NULL,
  `motPasse` varchar(10) DEFAULT NULL,
  `caisse` int(2) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `employe`
--

INSERT INTO `employe` (`id`, `matriculeEmp`, `nomPrenom`, `adresse`, `contact`, `tel`, `fonction`, `login`, `motPasse`, `caisse`) VALUES
(0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(1, '02', 'Admin', '', '', '', 'ADMINISTRATEUR', '02', '1598', 1),
(2, '04', 'Med Ali', '', '', '', 'SERVEUR', '54', '4741', 1),
(3, '03', 'Nidhal', '', '', '', 'SERVEUR', '03', '0303', 1),
(4, '05', 'Oussema', '', '', '', 'SERVEUR', '05', '5631', 1),
(5, '06', 'Oussema ben Amira', '', '', '', 'SERVEUR', '06', '4565', 1),
(6, '07', 'Morsi', '', '', '', 'SERVEUR', '07', '5455', 1),
(7, '08', 'GERANT', '', '', '', 'SERVEUR', '08', '1815', 1),
(8, '09', 'serveur 1', '', '', '', 'SERVEUR', '09', '0909', 2),
(9, '10', 'rached', '', '', '', 'SERVEUR', '', '', 2),
(10, '11', 'Med', '', '', '', 'SERVEUR', '11', '1111', 1),
(11, '12', 'Oussema 1', '', '', '', 'SERVEUR', '12', '1212', 1),
(12, '01', 'Admin', '', '', '', 'SERVEUR', '01', '0101', 1);

-- --------------------------------------------------------

--
-- Structure de la table `ligne_tickets`
--

CREATE TABLE `ligne_tickets` (
  `id` int(4) NOT NULL,
  `qte` decimal(5,0) NOT NULL,
  `prix` int(5) NOT NULL,
  `produit_id` int(4) NOT NULL,
  `ticket_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `ligne_tickets`
--

INSERT INTO `ligne_tickets` (`id`, `qte`, `prix`, `produit_id`, `ticket_id`) VALUES
(1, 2, 20, 1, 1),
(2, 2, 20, 2, 1),
(3, 2, 20, 1, 2),
(4, 3, 30, 3, 2);

-- --------------------------------------------------------

--
-- Structure de la table `prodcmd`
--

CREATE TABLE `prodcmd` (
  `id` int(4) NOT NULL,
  `codeProd` int(4) NOT NULL,
  `codeCmd` int(4) NOT NULL,
  `qte` int(11) NOT NULL,
  `prix` double NOT NULL DEFAULT 0,
  `tauxTVA` double NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `prodcmd`
--

INSERT INTO `prodcmd` (`id`, `codeProd`, `codeCmd`, `qte`, `prix`, `tauxTVA`) VALUES
(1, 1, 41, 2, 1.4, 0),
(2, 1, 42, 1, 1.4, 0),
(3, 2, 43, 2, 24, 0),
(4, 20, 43, 1, 35, 0),
(5, 19, 44, 1, 0.9, 0),
(6, 3, 44, 3, 0.9, 0);

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(2) NOT NULL,
  `title` varchar(17) DEFAULT NULL,
  `image` varchar(102) DEFAULT NULL,
  `previewDescription` varchar(112) DEFAULT NULL,
  `detailDescription` varchar(250) DEFAULT NULL,
  `price` decimal(4,0) NOT NULL,
  `qtestock` int(4) NOT NULL,
  `codeCategorie` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `title`, `image`, `previewDescription`, `detailDescription`, `price`, `qtestock`, `codeCategorie`) VALUES
(1, 'Lemon cheesecake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg', 'A cheesecake made of lemon', 'Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or ricotta), eggs, and sugar; if there is a bottom layer it often consists of a crust or', 10, 5, 2),
(2, 'Victoria sponge', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/victoria_sponge.jpg', 'sponge with jam', 'The Victoria sponge, also known as the Victoria sandwich or Victorian Cake, was named after Queen Victoria, who was known to enjoy a slice of the sponge cake with her afternoon tea. It is often referred to simply as \'sponge cake\', though it contains ', 10, 5, 2),
(3, 'Carrot cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/carrot_cake.jpg', 'Bugs bunnys favourite', 'Carrot cake closely resembles a quick bread in method of preparation (all the wet ingredients, such as the eggs and sugar, are mixed, all the dry ingredients are mixed, and the wet are then added to the dry) and final consistency (which is usually de', 10, 5, 2),
(4, 'Banana cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/banana_cake.jpg', 'Banana cake is a cake prepared using banana', 'Banana cake is prepared using banana as a primary ingredient and typical cake ingredients such as flour, sugar, eggs, butter, margarine or oil and baking soda. The bananas can be mashed or puréed using a food processor or electric mixer and mixed int', 10, 5, 2),
(5, 'Birthday cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/birthday_cake.JPG', 'a yearly treat', 'The birthday cake has been an integral part of the birthday celebrations in western European countries since the middle of the 19th century, which extended to Western culture. Certain rites and traditions, such as singing of birthday songs, associate', 10, 5, 2),
(6, 'Avocado cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/avocado_cake.jpg', 'Avocado cake is a cake prepared using avocado', 'Avocado cake is a cake prepared using avocado as a primary ingredient, together with other typical cake ingredients. The avocados may be mashed, and may be used as an ingredient in cake batter, in cake toppings and alone atop a cake. Cake variations ', 10, 5, 2),
(7, 'Chocolate cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/chocolate_cake.jpg', 'Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or sometimes both.', 'Chocolate cake is made with chocolate; it can be made with other ingredients, as well. These ingredients include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to 1764, when Dr. James Baker discovered how to make ', 10, 5, 2),
(8, 'Clementine cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/clementine_cake.png', 'Clementine cake is a cake prepared with clementine fruit', 'Clementine cake is a cake prepared with clementine fruit as a primary ingredient and other typical cake ingredients. Additional ingredients may be used, and some preparation variations exist. It may be prepared using whole or peeled clementines that ', 10, 5, 2),
(9, 'Fudge cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/fudge_cake.jpg', 'A fudge cake is a chocolate cake containing fudge', 'This recipe is also known as \'Death by Chocolate\', as it contains a considerable amount of chocolate, if topped with chocolate ice cream and lashings of whipped cream. In addition to Death By Chocolate, the many variations include pudding fudge cake,', 10, 5, 2),
(10, 'Spice cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/spice_cake.jpg', 'Spice cake is traditionally flavored with a mixture of spices.', 'Spice cake is traditionally flavored with a mixture of spices. The cake can be prepared in many varieties. Predominant flavorings include spices such as cinnamon, cloves, allspice, ginger and nutmeg.', 10, 5, 2),
(11, 'apple cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/jewish_apple_cake.jpg', 'apple cake is a kind of dense cake made with apples and sold mostly in Pennsylvania in the United States.', 'apple cake is a kind of dense cake made with apples and sold mostly in Pennsylvania in the United States. It has limited known connections to Jewish cuisine. It is thought that this cake is actually a Pennsylvania Dutch culinary item that was erroneo', 10, 5, 2),
(12, 'Plum cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/plum_cake.jpg', 'Plum cake refers to a wide range of cakes made with either dried fruit or with fresh fruit.', 'Plum cake refers to a wide range of cakes made with either dried fruit (such as grapes, currants, raisins or prunes) or with fresh fruit. There is a wide range of popular plum cakes and puddings. Since the meaning of the word \'plum\' has changed over ', 10, 5, 2),
(13, 'Apple cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/apple_cake.JPG', 'Apple cake is a popular dessert produced with the main ingredient of apples.', 'Apple cake is a popular dessert produced with the main ingredient of apples. Such a cake is made through the process of slicing this sweet fruit to add fragrance to a plain cake base. Traditional apple cakes go a step further by including various spi', 10, 5, 2),
(14, 'Bulla cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/bulla_cake.jpg', 'Bulla cake is a rich Jamaican cake made with molasses and spiced with ginger and nutmeg.', 'Bulla cake, usually referred to as bulla, is a rich Jamaican cake made with molasses and spiced with ginger and nutmeg, sometimes dark-colored and other times light-colored. Bulla are small loaves that are flat and round. They are inexpensive and eas', 10, 5, 2),
(15, 'Jaffa cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/jaffa_cake.png', 'Jaffa Cakes are biscuit-sized cakes.', 'Jaffa Cakes are biscuit-sized cakes introduced by McVitie and Price in the UK in 1927 and named after Jaffa oranges. The most common form of Jaffa Cakes are circular, 2 1⁄8 inches (54 mm) in diameter and have three layers: a Genoise sponge base, a la', 10, 5, 2),
(16, 'Strawberry cake', 'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/strawberry_cake.jpg', 'Strawberry cake is a crumbly bread made by strawberry.', 'Strawberry cake is a cake that uses strawberry as a primary ingredient. Strawberries may be used in the cake batter, atop cakes and in a strawberry cake\'s frosting. Some are served chilled or partially frozen, and they are sometimes served as a Valen', 10, 5, 2),
(17, 'sandwitch omelett', 'https://res.cloudinary.com/iset-sfax/image/upload/v1713349501/images/10_koseum.jpg', 'The fries-omelette sandwich is a typical Algerian sandwich', 'The fries-omelette sandwich is a typically Algerian sandwich composed of half a split baguette, in which fries are placed ', 15, 5, 9),
(18, 'tajine', 'https://res.cloudinary.com/iset-sfax/image/upload/v1713349495/images/9_or85g5.jpg', 'it designates an earthenware dish, a frying pan or a terrine', 'The Tunisian tagine, not to be confused with the tagine, is a kind of quiche without shortcrust pastry or a large omelette.', 7, 6, 9),
(19, 'soupe harira', 'https://res.cloudinary.com/iset-sfax/image/upload/v1713349479/images/11_dq6pdp.jpg', 'Harira is a traditional soup from Morocco and Algeria of Andalusian origin.', 'Harira is a traditional soup from Morocco and Algeria of Andalusian origin. It consists of tomatoes, vegetables, meat and onion.', 20, 5, 9),
(20, 'salmon steaks', 'https://res.cloudinary.com/iset-sfax/image/upload/v1713349458/images/138_cvy4ia.jpg', 'The salmon steaks are simply grilled and accompanied by salsa', 'The salmon steaks are simply grilled and accompanied by a salsa full of pep\'s made from avocado, tomato, red onion, candied lemon, olive oil', 50, 4, 9);

-- --------------------------------------------------------

--
-- Structure de la table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(4) NOT NULL,
  `numero` int(4) NOT NULL,
  `dateticket` date NOT NULL,
  `client` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `tickets`
--

INSERT INTO `tickets` (`id`, `numero`, `dateticket`, `client`) VALUES
(1, 1, '2024-04-02', 'Hassan Hachicha'),
(2, 2, '2024-04-18', 'Mohamed Tounsi');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cmd`
--
ALTER TABLE `cmd`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codeEmp` (`codeEmp`);

--
-- Index pour la table `employe`
--
ALTER TABLE `employe`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ligne_tickets`
--
ALTER TABLE `ligne_tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ligne_tickets_ibfk_1` (`produit_id`),
  ADD KEY `ligne_tickets_ibfk_2` (`ticket_id`);

--
-- Index pour la table `prodcmd`
--
ALTER TABLE `prodcmd`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codeCmd` (`codeCmd`),
  ADD KEY `codeProd` (`codeProd`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codeCategorie` (`codeCategorie`);

--
-- Index pour la table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `cmd`
--
ALTER TABLE `cmd`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT pour la table `employe`
--
ALTER TABLE `employe`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `ligne_tickets`
--
ALTER TABLE `ligne_tickets`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `prodcmd`
--
ALTER TABLE `prodcmd`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `cmd`
--
ALTER TABLE `cmd`
  ADD CONSTRAINT `cmd_ibfk_1` FOREIGN KEY (`codeEmp`) REFERENCES `employe` (`id`);

--
-- Contraintes pour la table `ligne_tickets`
--
ALTER TABLE `ligne_tickets`
  ADD CONSTRAINT `ligne_tickets_ibfk_1` FOREIGN KEY (`produit_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `ligne_tickets_ibfk_2` FOREIGN KEY (`ticket_id`) REFERENCES `tickets` (`id`);

--
-- Contraintes pour la table `prodcmd`
--
ALTER TABLE `prodcmd`
  ADD CONSTRAINT `prodcmd_ibfk_1` FOREIGN KEY (`codeCmd`) REFERENCES `cmd` (`id`),
  ADD CONSTRAINT `prodcmd_ibfk_2` FOREIGN KEY (`codeProd`) REFERENCES `products` (`id`);

--
-- Contraintes pour la table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`codeCategorie`) REFERENCES `categorie` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
