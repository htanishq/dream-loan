<?php     //start php tag
//include connect.php page for database connection
Include('connect.php')
//if submit is not blanked i.e. it is clicked.
If(isset($_REQUEST['submit'])!='')
{
If($_REQUEST['firstName']=='' || $_REQUEST['lastName']=='' || $_REQUEST['userName']==''|| $_REQUEST['password']==''|| $_REQUEST['mobilenumber']==''|| $_REQUEST['emailid']=='')
{
Echo "please fill the empty field.";
}
Else
{
$sql="insert into regist(First Name,Last Name,User Name,Password,MobileNo,EmailId) values('".$_REQUEST['firstName']."', '".$_REQUEST['lastName']."', '".$_REQUEST['userName']."', '".$_REQUEST['password']."', '".$_REQUEST['mobilenumber']."', '".$_REQUEST['emailid']."')";
$res=mysql_query($sql);
If($res)
{
Echo "Record successfully inserted";
}
Else
{
Echo "There is some problem in inserting record";
}

}
}

?>