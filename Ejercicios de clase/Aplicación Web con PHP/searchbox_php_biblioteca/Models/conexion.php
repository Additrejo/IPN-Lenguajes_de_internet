<?php
	class conexion
	{
		private $servidor;
		private $usuario;
		private $contrasena;
		private $basedatos;
		public  $conexion;

		public function __construct(){
			$this->servidor   = "127.0.0.1";
			$this->usuario	  = "root";
			$this->contrasena = "tarantula21";
			$this->basedatos  = "biblioteca";

		}

		function conectar(){
			$this->conexion= new mysqli($this->servidor,$this->usuario,$this->contrasena,$this->basedatos);
		}

		function cerrar(){
			$this->conexion->close();
		}
	}

?>
