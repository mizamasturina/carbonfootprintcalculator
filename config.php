 <?php
    
    DEFINE ('DB_USER', 'root');
    DEFINE ('DB_PASSWORD', '');
    DEFINE ('DB_HOST', 'localhost');
    DEFINE ('DB_NAME', 'carbon_footprint');

    // Make the connection:
    $conn = mysqli_connect (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );

    
 
 ?>