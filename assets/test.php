
<?php
    $mes = "";
    $snt = array();
    $result = array();

    if(isset($_GET["btn"])) {
        if(isset($_GET["a"])) {
            $a = (int)$_GET["a"];
        }
        for($s=2; $s<=$a; $s++) {
            if($s == 2) {
                $snt[] = $s;
            } else {
                $flag = 1;
                for($j=2; $j<$s; $j++) {
                    if($s%$j == 0) {
                        $flag++;
                        break;
                    }
                }
                if($flag==1) {
                    $snt[] = $s;
                }
            }
        }

        for($i=0; $i<count($snt); $i++) {
            
            while($a % $snt[$i] == 0) {
                $result[] = $snt[$i];
                $a = $a/$snt[$i];
            }
        }
        $mes = print_r($result);
        
    }



?>
<form action="" mothod="get">
    <span><?=$a ?></span>
    <input type="number" name="a" >
    <input type="submit" name="btn" value="send">

</form>
<p><?=$mes ?></p>


