-- Copyright 2018-2019, https://beingtechie.io

-- Script: db-setup-workflows.sql
-- Description: Create workflow specific tables and grant privileges
-- Version: 1.0
-- Author: Thribhuvan Krishnamurthy


-- # Step 1 - WORKFLOWS table
DROP TABLE IF EXISTS proman.WORKFLOWS CASCADE;
CREATE TABLE IF NOT EXISTS proman.WORKFLOWS (
	ID SMALLSERIAL PRIMARY KEY,
    UUID VARCHAR(36) NOT NULL,
    VERSION SERIAL NOT NULL,
    NAME VARCHAR(100) NOT NULL,
    DESCRIPTION VARCHAR(500) NOT NULL,
    ACTIVE BOOLEAN NOT NULL,
    CREATED_BY VARCHAR(100) NOT NULL ,
    CREATED_AT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    MODIFIED_BY VARCHAR(100) NULL,
    MODIFIED_AT TIMESTAMP NULL
);
COMMENT ON TABLE proman.WORKFLOWS IS 'Table to capture workflows';
COMMENT ON COLUMN proman.WORKFLOWS.ID IS 'Auto generated PK identifier';
COMMENT ON COLUMN proman.WORKFLOWS.UUID IS 'Unique identifier used as reference by external systems';
COMMENT ON COLUMN proman.WORKFLOWS.VERSION IS 'Versioning for optimistic locking';
COMMENT ON COLUMN proman.WORKFLOWS.NAME IS 'Name of the Workflow';
COMMENT ON COLUMN proman.WORKFLOWS.DESCRIPTION IS 'Description of the Workflow';
COMMENT ON COLUMN proman.WORKFLOWS.ACTIVE IS 'Active Status of the Workflow - true(ACTIVE), false(INACTIVE)';
COMMENT ON COLUMN proman.WORKFLOWS.CREATED_BY IS 'User who inserted this record';
COMMENT ON COLUMN proman.WORKFLOWS.CREATED_AT IS 'Point in time when this record was inserted';
COMMENT ON COLUMN proman.WORKFLOWS.MODIFIED_BY IS 'User who modified this record';
COMMENT ON COLUMN proman.WORKFLOWS.MODIFIED_AT IS 'Point in time when this record was modified';

ALTER TABLE proman.WORKFLOWS OWNER TO postgres;
ALTER TABLE proman.WORKFLOWS ADD CONSTRAINT UK_WORKFLOWS_NAME UNIQUE(NAME);

-- # Step 1 - WORKFLOW_PHASES table
DROP TABLE IF EXISTS proman.WORKFLOW_PHASES;
CREATE TABLE IF NOT EXISTS proman.WORKFLOW_PHASES (
	ID SERIAL PRIMARY KEY,
    UUID VARCHAR(36) NOT NULL,
    WORKFLOW_ID SMALLINT NOT NULL,
    NAME VARCHAR(100) NOT NULL,
    DESCRIPTION VARCHAR(500) NOT NULL,
    CREATED_BY VARCHAR(100) NOT NULL ,
    CREATED_AT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE proman.WORKFLOW_PHASES IS 'Table to capture Workflow Phases';
COMMENT ON COLUMN proman.WORKFLOW_PHASES.ID IS 'Auto generated PK identifier';
COMMENT ON COLUMN proman.WORKFLOW_PHASES.UUID IS 'Unique identifier used as reference by external systems';
COMMENT ON COLUMN proman.WORKFLOW_PHASES.NAME IS 'Name of the Workflow Phase';
COMMENT ON COLUMN proman.WORKFLOW_PHASES.WORKFLOW_ID IS 'Workflow that this Phase belongs to';
COMMENT ON COLUMN proman.WORKFLOW_PHASES.CREATED_BY IS 'User who inserted this record';
COMMENT ON COLUMN proman.WORKFLOW_PHASES.CREATED_AT IS 'Point in time when this record was inserted';

ALTER TABLE proman.WORKFLOW_PHASES OWNER TO postgres;
ALTER TABLE proman.WORKFLOW_PHASES ADD CONSTRAINT UK_WORKFLOW_PHASES_NAME UNIQUE(NAME);
ALTER TABLE proman.WORKFLOW_PHASES ADD CONSTRAINT FK_WORKFLOW_PHASES_WORKFLOW_ID FOREIGN KEY(WORKFLOW_ID) REFERENCES proman.WORKFLOWS(ID);

-- # Step 3 - Commit Transaction
COMMIT;

-- ********** End of setup **********