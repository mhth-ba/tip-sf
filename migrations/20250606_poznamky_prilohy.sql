-- 1. Drop the old constraint
ALTER TABLE [Dispecing].[DDH_OST_Prilohy]
    DROP CONSTRAINT [FK_DDH_OST_Prilohy_DDH_OST_Hlavny];
GO

-- 2. Alter the column to allow NULL
ALTER TABLE [Dispecing].[DDH_OST_Prilohy]
    ALTER COLUMN [hlavny_id] [int] NULL;
GO

-- 3. Add the FK constraint back
ALTER TABLE [Dispecing].[DDH_OST_Prilohy]  WITH CHECK ADD  CONSTRAINT [FK_DDH_OST_Prilohy_DDH_OST_Hlavny]
    FOREIGN KEY([hlavny_id])
        REFERENCES [Dispecing].[DDH_OST_Hlavny] ([id]);
GO

ALTER TABLE [Dispecing].[DDH_OST_Prilohy] CHECK CONSTRAINT [FK_DDH_OST_Prilohy_DDH_OST_Hlavny];
GO
