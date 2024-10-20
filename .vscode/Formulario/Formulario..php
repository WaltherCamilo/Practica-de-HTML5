<?php
// Comprobamos si se han enviado datos a través del formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Recogemos los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm-password'];
    $dob = $_POST['dob'];

    // Validaciones simples (puedes agregar más validaciones)
    if ($password === $confirm_password) {
        // Aquí puedes agregar el código para guardar los datos en una base de datos o procesarlos de alguna manera
        echo "<h4>Registro exitoso</h4>";
        echo "Nombre: " . htmlspecialchars($nombre) . "<br>";
        echo "Email: " . htmlspecialchars($email) . "<br>";
        echo "Fecha de Nacimiento: " . htmlspecialchars($dob) . "<br>";
    } else {
        echo "<h4>Error: Las contraseñas no coinciden.</h4>";
    }
}
?>
