<?php
    class config {
        public $server_name = "103.200.23.160";
        public $user_name = "digishop_group2";
        public $password = "c2206lgroup2";
        public $database_name = "digishop_prime_fitness";
        public $port = "3306";
        public $conn;

        // public $server_name = "localhost";
        // public $user_name = "root";
        // public $password = "";
        // public $database_name = "digishop_prime_fitness";
        // public $port = "3306";
        // public $conn;

        public function __construct() {
            $dsn = "mysql:host=".$this->server_name.";dbname=".$this->database_name.";port=".$this->port.";charset=utf8";
            $option = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
            try {
                $this->conn =  new PDO($dsn,$this->user_name,$this->password,$option);
            } catch(PDOException $e) {
                echo $e->getMessage();
            }
        }
        public function connect() {
            return $this->conn;
        }
    }


?>