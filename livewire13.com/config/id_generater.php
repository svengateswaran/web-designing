<?php
// create_id("USR","id","com_user_profile"); 
// Prefix of your id  Ex: ME - ME0932784, US -US093845,
// Your field id value in table
// Your table name of getting the max id value 
// Note : Before use this function you must connect the database.

function create_id($strPrx,$primary_id,$table_name) 
{ 
   
	$result = mysql_query("select MAX($primary_id) from $table_name") or die(mysql_error());
	if($row=mysql_fetch_array($result))
	{
		 $id =$row["MAX($primary_id)"];
	}
	$count = $id+1;
	$len = strlen($count);
	if			($len == 1)		{		$rand = "0000".$count;		}
	else if		($len == 2)		{		$rand = "000".$count;		}
	else if		($len == 3)		{		$rand = "00".$count;		}
	else if		($len == 4)		{		$rand = "0".$count;			}
	else if		($len == 5)		{		$rand = $count;				}
	
	return $strPrx.$rand;

} 
// For three digit numbers
function create_id_small($strPrx,$primary_id,$table_name) 
{ 
	$result = mysql_query("select MAX($primary_id) from $table_name") or die(mysql_error());
	if($row=mysql_fetch_array($result))
	{
		 $id =$row["MAX($primary_id)"];
	}
	$count = $id+1;
	$len = strlen($count);
	if			($len == 1)		{		$rand = "00".$count;		}
	else if		($len == 2)		{		$rand = "0".$count;			}
	else if		($len == 3)		{		$rand = $count;				}
	
	return $strPrx.$rand;
} 

?>