<?php
//
/**
 *
 */

  $connection ='';
class db
{

  public function connect()
  {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $this->connection = new mysqli($servername, $username, $password);
      if ($this->connection->connect_error) {
      die("Connection failed: " . $this->connection->connect_error);
  }
  return true;
  }





}
