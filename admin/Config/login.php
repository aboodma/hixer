<?php
  print_r($_POST);
  include '../modules/Auth.php';
if (isset($_POST)) {
$Auth = new Auth;
echo $Auth->Login("admin","admin");

}
 ?>
