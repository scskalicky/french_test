<?php

if ( $_POST['payload'] ) {
    shell_exec('cd ft');
    shell_exec('git pull'); 
}