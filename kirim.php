<?php
if($_POST['kirim']){
	$admin = 'yakinadtrian@yahoo.com'; //ganti email dg email admin (email penerima pesan)
	
	$nama	= htmlentities($_POST['name']);
	$email	= htmlentities($_POST['email']);
	$judul	= htmlentities($_POST['subject']);
	$pesan	= htmlentities($_POST['message']);
	
	$pengirim	= 'Dari: '.$nama.' <'.$email.'>';
	
	if(mail($admin, $judul, $pesan, $pengirim)){
		echo 'SUCCESS: Pesan anda berhasil di kirim. <a href="contact.html">Kembali</a>';
	}else{
		echo 'ERROR: Pesan anda gagal di kirim silahkan coba lagi. <a href="contact.html">Kembali</a>';
	}
}else{
	header("Location: contact.html");
}
?>