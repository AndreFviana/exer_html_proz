CREATE DATABASE loja_de_motos ;

	CREATE TABLE moto (
  id_moto SERIAL,
  marca VARCHAR(100) NOT NULL,
  cilindrada INT NOT NULL,
  ano INT NOT NULL 
  )
 	CREATE TABLE donos (
    id_dono SERIAL,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL
    )
  
  INSERT INTO donos (nome,sobrenome) VALUES ('Andre','Viana');
    INSERT INTO donos (nome,sobrenome) VALUES ('Roberto','Garcia');
  	  INSERT INTO donos (nome,sobrenome) VALUES ('João','Roraima');
  		INSERT INTO donos (nome,sobrenome) VALUES ('Andrea','Becker');
         INSERT INTO donos (nome,sobrenome,moto_id) VALUES ('Andre','Viana',2);
  
    
  INSERT INTO moto(marca, cilindrada, ano) VALUES ('honda', 160 ,2021);
    INSERT INTO moto(marca, cilindrada, ano) VALUES ('yamaha', 150 ,2021);
      INSERT INTO moto(marca, cilindrada, ano) VALUES ('honda', 160 ,2022);
        INSERT INTO moto(marca, cilindrada, ano) VALUES ('honda', 160 ,2023);
          INSERT INTO moto(marca, cilindrada, ano) VALUES ('suzuki', 150 ,2020);
            
   ALTER TABLE donos ADD COLUMN moto_id INT         

	SELECT nome,marca, ano FROM moto
	INNER JOIN donos
    ON donos.moto_id = moto.id_moto
