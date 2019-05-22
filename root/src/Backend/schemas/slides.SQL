use ihc_db;

CREATE TABLE IF NOT EXISTS slides (
	id int NOT NULL auto_increment,
	tissueId TEXT NOT NULL,
    antibodyName TEXT NOT NULL,
    antibodyLot TEXT NOT NULL,
    createdAt TIME NOT NULL,
    updatedAt TIME NOT NULL,
    PRIMARY KEY (id)
    

);

SELECT * from slides;