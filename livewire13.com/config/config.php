<? 
	session_start();
	$dbhost 	= "localhost";
	$dbuser 	= "root";
	$dbpass 	= "";
	$conn 		= mysql_connect($dbhost, $dbuser, $dbpass) or die(mysql_error());
	$dbname 	= "livewire13";
	mysql_select_db($dbname)or die(mysql_error());
  /*  $dbhost 	= "localhost";
	$dbuser 	= "dhanabal_gene";
	$dbpass 	= "DUR42uSblPLF";
	$conn 		= mysql_connect($dbhost, $dbuser, $dbpass) or die(mysql_error());
	$dbname 	= "dhanabal_genespire13";
	mysql_select_db($dbname)or die(mysql_error());*/
	
	//database table names
	$member_details 		= "members";
	
?>