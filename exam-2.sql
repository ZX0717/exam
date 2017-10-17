-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 192.168.138.200    Database: exam
-- ------------------------------------------------------
-- Server version	5.7.19-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_exam_choice`
--

DROP TABLE IF EXISTS `tbl_exam_choice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_exam_choice` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `correct` bit(1) DEFAULT NULL,
  `subject_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FKA24982C03F8D0CE4` (`subject_id`),
  CONSTRAINT `FKA24982C03F8D0CE4` FOREIGN KEY (`subject_id`) REFERENCES `tbl_exam_subject` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=146 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exam_choice`
--

LOCK TABLES `tbl_exam_choice` WRITE;
/*!40000 ALTER TABLE `tbl_exam_choice` DISABLE KEYS */;
INSERT INTO `tbl_exam_choice` VALUES (1,'byte','\0',2),(2,'short','\0',2),(3,'int','\0',2),(4,'long','',2),(5,'aa','',3),(6,'bb','\0',3),(7,'cc','\0',3),(8,'dd','\0',3),(9,'aaa','\0',4),(10,'bbb','',4),(11,'ccc','\0',4),(12,'ddd','\0',4),(13,'aaaa','\0',5),(14,'bbbb','\0',5),(15,'cccc','',5),(16,'dddd','\0',5),(17,'1','',6),(18,'2','',6),(19,'3','\0',6),(20,'4','\0',6),(21,'11','\0',7),(22,'22','',7),(23,'33','',7),(24,'44','',7),(25,'111','',8),(26,'222','',8),(27,'333','',8),(28,'444','\0',8),(29,'ab','\0',12),(30,'bb','',12),(31,'cb','\0',12),(32,'db','\0',12),(33,'ac','',13),(34,'bc','\0',13),(35,'cc','\0',13),(36,'dc','\0',13),(37,'ad','\0',14),(38,'bd','\0',14),(39,'cd','',14),(40,'dd','\0',14),(41,'12','',15),(42,'22','',15),(43,'32','\0',15),(44,'42','',15),(45,'13','',16),(46,'23','',16),(47,'33','',16),(48,'43','\0',16),(49,'14','\0',17),(50,'24','',17),(51,'34','',17),(52,'44','\0',17),(53,'a1','',21),(54,'b1','\0',21),(55,'c1','\0',21),(56,'d1','\0',21),(57,'1a','',22),(58,'2a','',22),(59,'3a','',22),(60,'4a','\0',22),(61,'aa','\0',23),(62,'bb','\0',23),(63,'cc','',23),(64,'dd','\0',23),(65,'aaa','\0',24),(66,'bbb','\0',24),(67,'ccc','\0',24),(68,'ddd','',24),(69,'aaaa','\0',25),(70,'bbbb','',25),(71,'cccc','\0',25),(72,'dddd','\0',25),(73,'1','',26),(74,'2','',26),(75,'3','\0',26),(76,'4','',26),(77,'11','\0',27),(78,'22','',27),(79,'33','',27),(80,'44','',27),(81,'111','',28),(82,'222','\0',28),(83,'333','',28),(84,'444','\0',28),(85,'A1','',33),(86,'A2','\0',33),(87,'A3','\0',33),(88,'A4','\0',33),(89,'999','\0',34),(90,'888','\0',34),(91,'777','',34),(92,'666','\0',34),(93,'555','\0',35),(94,'444','\0',35),(95,'333','\0',35),(96,'222','',35),(98,'1P','',37),(99,'2P','',37),(100,'3P','',37),(101,'4P','\0',37),(102,'1O','\0',38),(103,'2O','',38),(104,'3O','',38),(105,'4O','\0',38),(126,'999','',39),(127,'888','\0',39),(128,'777','\0',39),(129,'666','\0',39),(138,'1O','',43),(139,'2O','\0',43),(140,'3O','\0',43),(141,'4O','',43),(142,'1O','',44),(143,'2O','\0',44),(144,'3O','\0',44),(145,'4O','',44);
/*!40000 ALTER TABLE `tbl_exam_choice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exam_department`
--

DROP TABLE IF EXISTS `tbl_exam_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_exam_department` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `realName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exam_department`
--

LOCK TABLES `tbl_exam_department` WRITE;
/*!40000 ALTER TABLE `tbl_exam_department` DISABLE KEYS */;
INSERT INTO `tbl_exam_department` VALUES (1,'全部','allDepartment'),(2,'WebUI','WebUI'),(3,'JavaEE','JavaEE'),(4,'大数据','BigData'),(5,'Android','Android'),(6,'PHP','PHP'),(7,'IOS','IOS');
/*!40000 ALTER TABLE `tbl_exam_department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exam_paper`
--

DROP TABLE IF EXISTS `tbl_exam_paper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_exam_paper` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `answerQuestionTime` double DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `totalPoints` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK92534C8DF2C32590` (`department_id`),
  KEY `FK92534C8D5CC62F70` (`user_id`),
  CONSTRAINT `FK92534C8D5CC62F70` FOREIGN KEY (`user_id`) REFERENCES `tbl_exam_user` (`id`),
  CONSTRAINT `FK92534C8DF2C32590` FOREIGN KEY (`department_id`) REFERENCES `tbl_exam_department` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exam_paper`
--

LOCK TABLES `tbl_exam_paper` WRITE;
/*!40000 ALTER TABLE `tbl_exam_paper` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_exam_paper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exam_papersubject`
--

DROP TABLE IF EXISTS `tbl_exam_papersubject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_exam_papersubject` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `score` int(11) DEFAULT NULL,
  `examPaper_id` bigint(20) DEFAULT NULL,
  `subject_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK5B4F3FFF3F8D0CE4` (`subject_id`),
  KEY `FK5B4F3FFF9D52EAA4` (`examPaper_id`),
  CONSTRAINT `FK5B4F3FFF3F8D0CE4` FOREIGN KEY (`subject_id`) REFERENCES `tbl_exam_subject` (`id`),
  CONSTRAINT `FK5B4F3FFF9D52EAA4` FOREIGN KEY (`examPaper_id`) REFERENCES `tbl_exam_paper` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exam_papersubject`
--

LOCK TABLES `tbl_exam_papersubject` WRITE;
/*!40000 ALTER TABLE `tbl_exam_papersubject` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_exam_papersubject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exam_subject`
--

DROP TABLE IF EXISTS `tbl_exam_subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_exam_subject` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `analysis` varchar(255) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `checkState` varchar(255) DEFAULT NULL,
  `stem` varchar(255) DEFAULT NULL,
  `uploadTime` datetime DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  `subjectLevel_id` bigint(20) DEFAULT NULL,
  `subjectType_id` bigint(20) DEFAULT NULL,
  `topic_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FKAC2D3EDD9E4D9C4` (`subjectType_id`),
  KEY `FKAC2D3EDF2C32590` (`department_id`),
  KEY `FKAC2D3ED5CC62F70` (`user_id`),
  KEY `FKAC2D3EDB797230` (`subjectLevel_id`),
  KEY `FKAC2D3ED12BE0C84` (`topic_id`),
  CONSTRAINT `FKAC2D3ED12BE0C84` FOREIGN KEY (`topic_id`) REFERENCES `tbl_exam_topic` (`id`),
  CONSTRAINT `FKAC2D3ED5CC62F70` FOREIGN KEY (`user_id`) REFERENCES `tbl_exam_user` (`id`),
  CONSTRAINT `FKAC2D3EDB797230` FOREIGN KEY (`subjectLevel_id`) REFERENCES `tbl_exam_subjectlevel` (`id`),
  CONSTRAINT `FKAC2D3EDD9E4D9C4` FOREIGN KEY (`subjectType_id`) REFERENCES `tbl_exam_subjecttype` (`id`),
  CONSTRAINT `FKAC2D3EDF2C32590` FOREIGN KEY (`department_id`) REFERENCES `tbl_exam_department` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exam_subject`
--

LOCK TABLES `tbl_exam_subject` WRITE;
/*!40000 ALTER TABLE `tbl_exam_subject` DISABLE KEYS */;
INSERT INTO `tbl_exam_subject` VALUES (2,'长整型占8个字节','【所以说，这个答案就是选择题选项数组转成字符串，简答题的答案就是解析？？？】','未审核','下面哪种数据类型占8个字节','2017-01-13 09:31:51',3,2,2,7,NULL),(3,'111111','aa,bb,cc,dd','未审核','单选1111111111',NULL,2,3,2,2,NULL),(4,'122222222222','aaa,bbb,ccc,ddd','未审核','单选222222222222',NULL,2,3,2,3,NULL),(5,'333333333','aaaa,bbbb,cccc,dddd','未审核','单选33333333333',NULL,2,3,2,4,NULL),(6,'444444444','1,2,3,4','未审核','多选4444444444',NULL,2,3,3,2,NULL),(7,'55555','11,22,33,44','未审核','多选555555555555555',NULL,2,3,3,3,NULL),(8,'666666','111,222,333,444','未审核','多选6666666666',NULL,2,3,3,4,NULL),(9,'7777777777','qqqqqqqqqqqqqqqqqqqqqqqqq','未审核','简答777777777777',NULL,2,3,4,2,NULL),(10,'888888','wwwwwwwwwwwwwwwwwwww','未审核','简答888888888888',NULL,2,3,4,3,NULL),(11,'899999999','eeeeeeeeeeeeeeeeeeeeeeeeeeee','未审核','简答9999999999999999',NULL,2,3,4,4,NULL),(12,'000000000','ab,bb,cb,db','未审核','单选00000000000000000000',NULL,2,4,2,2,NULL),(13,'1212','ac,bc,cc,dc','未审核','单选121212121212121212',NULL,2,4,2,3,NULL),(14,'1313','ad,bd,cd,dd','未审核','单选1313131313131313',NULL,2,4,2,4,NULL),(15,'2323','12,22,32,42','未审核','多选232323232323',NULL,2,4,3,2,NULL),(16,'3434','13,23,33,43','未审核','多选3434343434',NULL,2,4,3,3,NULL),(17,'4545','14,24,34,44','未审核','多选4545545454545',NULL,2,4,3,4,NULL),(18,'5656','rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr','未审核','简答5656565656',NULL,2,4,4,2,NULL),(19,'6767','ttttttttttttttttttttttttttttttttttttt','未审核','简答6766767676',NULL,2,4,4,3,NULL),(20,'7878','yyyyyyyyyyyyyyyyyyyyyyyyyyy','未审核','简答787878787',NULL,2,4,4,4,NULL),(21,'8989','a1,b1,c1,d1','未审核','单选89898989',NULL,3,2,2,2,NULL),(22,'9090','1a,2a,3a,4a','未审核','多选909090',NULL,3,3,3,3,NULL),(23,'000111111','aa,bb,cc,dd','通过','单选0001111111111',NULL,2,2,2,2,NULL),(24,'000122222222222','aaa,bbb,ccc,ddd','未审核','单选000222222222222',NULL,2,2,2,3,NULL),(25,'000333333333','aaaa,bbbb,cccc,dddd','未审核','单选00033333333333',NULL,2,2,2,4,NULL),(26,'000444444444','1,2,3,4','未审核','多选0004444444444',NULL,2,2,3,2,NULL),(27,'00055555','11,22,33,44','未审核','多选000555555555555555',NULL,2,2,3,3,NULL),(28,'000666666','111,222,333,444','未审核','多选0006666666666',NULL,2,2,3,4,NULL),(30,'000888888','wwwwwwwwwwwwwwwwwwww','未审核','简答000888888888888',NULL,2,2,4,3,NULL),(31,'0000899999999','eeeeeeeeeeeeeeeeeeeeeeeeeeee','未审核','简答0009999999999999999',NULL,2,2,4,4,NULL),(33,'A2A2','A1,A2,A3,A4','未审核','单选AAAAA222222222',NULL,2,2,2,2,NULL),(34,'B2B2','999,888,777,666','未审核','同类单选BBBBBB22222222',NULL,2,2,2,2,NULL),(35,'C3C3','555,444,333,222','未审核','同类单选CCCCC333333',NULL,2,3,2,2,NULL),(36,'D4D4','4D4D4D4D4DD4D4D4D4D4D4','未审核','同类简答D444444',NULL,2,2,4,2,NULL),(37,'PPPPPPP','1P,2P,3P,4P','未审核','同类同类多选PPPPPPPPP',NULL,2,2,3,2,NULL),(38,'OOOOOOOOOOO','1O,2O,3O,4O','未审核','同类同类多选OOOOOOOOO',NULL,2,2,3,2,NULL),(39,'B2B2','999,888,777,666','未审核','=【待删】单选BBBBBB2222222290000000',NULL,2,2,2,2,NULL),(43,'OOOOOOOOOOO','1O,2O,3O,4O','未审核','=【待删】多选OOOOOOOO11111',NULL,2,2,3,2,NULL),(44,'OOOOOOOOOOO','1O,2O,3O,4O','未审核','=【待删】多选OOOOOOOO22222',NULL,2,2,3,2,NULL),(45,'D4D4','4D4D4D4D4DD4D4D4D4D4D4','未审核','同类【待删】简答D44444400000',NULL,2,2,4,2,NULL),(46,'D4D4','4D4D4D4D4DD4D4D4D4D4D4','未审核','同类【待删】简答D444444111111',NULL,2,2,4,2,NULL),(47,'D4D4','4D4D4D4D4DD4D4D4D4D4D4','未审核','同类【待删】简答D44444422222',NULL,2,2,4,2,NULL),(51,'OOOOOOOOOOO','1O,2O,3O,4O','未审核','=【待删】多选OOOOOOOOO00aaaaa',NULL,2,2,3,2,NULL),(52,'OOOOOOOOOOO','1O,2O,3O,4O','未审核','=【待删】多选OOOOOOOO111bbbbb',NULL,2,2,3,2,NULL),(53,'OOOOOOOOOOO','1O,2O,3O,4O','未审核','=【待删】多选OOOOOOOO2222aaaaa',NULL,2,2,3,2,NULL),(54,'D4D4','4D4D4D4D4DD4D4D4D4D4D4','未审核','同类【待删】简答D444444000bbbbb',NULL,2,2,4,2,NULL),(55,'D4D4','4D4D4D4D4DD4D4D4D4D4D4','未审核','同类【待删】简答D4444441111ccccc',NULL,2,2,4,2,NULL),(78,'3345666','222,23,2224,2225','未审核','3434343',NULL,2,2,2,2,NULL),(80,'76767676767','667,7,6,777','未审核','676767676',NULL,2,2,2,2,NULL),(81,'90909899990','99,09,0,00','未审核','09090909',NULL,2,2,2,2,NULL),(83,'aaa111aa','1,a,a1,1a','未审核','1a1a1a1a1',NULL,2,2,2,2,NULL),(84,'1a11a1a1a1a1','11111a,aaaaaa,aaa1111,1111aaaa','未审核','1a1a1a1a1a1a1a1a1a1',NULL,2,2,2,2,NULL),(91,'33','33333,33,333,333','未审核','222',NULL,1,1,1,1,NULL),(92,'666','66,666,666,6','未审核','6666',NULL,1,1,1,1,NULL),(93,'','7,777,,','未审核','777777',NULL,1,1,1,1,NULL),(94,'99','999,999,99,999','未审核','9999',NULL,1,1,1,1,NULL),(95,'898','98989,898989,9989,899','未审核','8989898',NULL,1,1,1,1,NULL),(107,'adasdas','aadadasdasd','未审核','qsdadad',NULL,1,1,4,1,NULL),(110,'yytytr','etyteetryt','未审核','erewtwertyty',NULL,1,1,4,1,NULL);
/*!40000 ALTER TABLE `tbl_exam_subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exam_subjectlevel`
--

DROP TABLE IF EXISTS `tbl_exam_subjectlevel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_exam_subjectlevel` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `realName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exam_subjectlevel`
--

LOCK TABLES `tbl_exam_subjectlevel` WRITE;
/*!40000 ALTER TABLE `tbl_exam_subjectlevel` DISABLE KEYS */;
INSERT INTO `tbl_exam_subjectlevel` VALUES (1,'allLevel','全部'),(2,'easy','简单'),(3,'medium','中等'),(4,'difficult','难');
/*!40000 ALTER TABLE `tbl_exam_subjectlevel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exam_subjecttype`
--

DROP TABLE IF EXISTS `tbl_exam_subjecttype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_exam_subjecttype` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `realName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exam_subjecttype`
--

LOCK TABLES `tbl_exam_subjecttype` WRITE;
/*!40000 ALTER TABLE `tbl_exam_subjecttype` DISABLE KEYS */;
INSERT INTO `tbl_exam_subjecttype` VALUES (1,'allType','全部'),(2,'radio','单选题'),(3,'check','复选题'),(4,'question','简答题');
/*!40000 ALTER TABLE `tbl_exam_subjecttype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exam_topic`
--

DROP TABLE IF EXISTS `tbl_exam_topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_exam_topic` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK92920830F2C32590` (`department_id`),
  CONSTRAINT `FK92920830F2C32590` FOREIGN KEY (`department_id`) REFERENCES `tbl_exam_department` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exam_topic`
--

LOCK TABLES `tbl_exam_topic` WRITE;
/*!40000 ALTER TABLE `tbl_exam_topic` DISABLE KEYS */;
INSERT INTO `tbl_exam_topic` VALUES (1,'全部',1,'allTopic'),(2,'HTML',2,'HTML'),(3,'JavaScript',2,'JavaScript'),(4,'CSS',2,'CSS'),(5,'jQuery',2,'jQuery'),(6,'Bootstrap',2,'Bootstrap'),(7,'CoreJava',3,'CoreJava'),(8,'XML',3,'XML'),(9,'Servlet/JSP',3,'Servlet/JSP');
/*!40000 ALTER TABLE `tbl_exam_topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exam_user`
--

DROP TABLE IF EXISTS `tbl_exam_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_exam_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK7857CCAAF2C32590` (`department_id`),
  CONSTRAINT `FK7857CCAAF2C32590` FOREIGN KEY (`department_id`) REFERENCES `tbl_exam_department` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exam_user`
--

LOCK TABLES `tbl_exam_user` WRITE;
/*!40000 ALTER TABLE `tbl_exam_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_exam_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-18  3:34:15
