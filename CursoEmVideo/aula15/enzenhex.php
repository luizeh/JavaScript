<?php
$nome = "Pagotti";
$ano = date("Y");
$frases = [
    "o sistema é bruto",
    "PHP funcionando sem frescura",
    "arquivo único, simples e direto",
    "servidor local rodando liso",
    $nome,
    $ano,
];

$fraseAleatoria = $frases[array_rand($frases)];

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto PHP Pro Max</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            font-family: Arial, Helvetica, sans-serif;
            background: linear-gradient(135deg, #111827, #1e293b, #0f172a);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .card {
            width: 100%;
            max-width: 600px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 24px;
            padding: 35px;
            text-align: center;
            backdrop-filter: blur(12px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        .destaque {
            color: #38bdf8;
        }

        p {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 20px;
            color: #dbeafe;
        }

        .box {
            background: rgba(0, 0, 0, 0.25);
            border-radius: 16px;
            padding: 18px;
            margin-top: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .frase {
            font-size: 1.2rem;
            font-weight: bold;
            color: #facc15;
        }

        .btn {
            display: inline-block;
            margin-top: 25px;
            padding: 12px 24px;
            border-radius: 999px;
            text-decoration: none;
            color: #020617;
            background: #38bdf8;
            font-weight: bold;
            transition: 0.3s;
        }

        .btn:hover {
            transform: scale(1.05);
            background: #7dd3fc;
        }

        footer {
            margin-top: 25px;
            font-size: 0.9rem;
            color: #94a3b8;
        }
    </style>
</head>
<body>

    <main class="card">
        <h1>
            Salve, <span class="destaque"><?php echo $nome; ?></span>
        </h1>

        <p>
            Esse é um arquivo único em PHP com HTML, CSS e lógica básica funcionando junto.
        </p>

        <div class="box">
            <p>Frase aleatória gerada pelo PHP:</p>
            <div class="frase">
                <?php echo $fraseAleatoria; ?>
            </div>
        </div>

        <div class="box">
            <p>Informações do servidor:</p>
            <p>
                Ano atual: <strong><?php echo $ano; ?></strong>
            </p>
            <p>
                Versão do PHP: <strong><?php echo phpversion(); ?></strong>
            </p>
        </div>

        <a class="btn" href="">
            Recarregar página
        </a>

        <footer>
            Projeto PHP Pro Max em um único arquivo.
        </footer>
    </main>

</body>
</html>