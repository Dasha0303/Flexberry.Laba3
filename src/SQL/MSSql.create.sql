



CREATE TABLE [АктПогрРазгр] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [Тип] VARCHAR(9)  NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧАктПГ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВесТовараКонец] FLOAT  NULL,

	 [ВесТовараНачало] FLOAT  NULL,

	 [ВремявПути] FLOAT  NULL,

	 [МестоПогрузки] VARCHAR(255)  NULL,

	 [МестоРазгрузки] VARCHAR(255)  NULL,

	 [ОтклоненияВеса] VARCHAR(255)  NULL,

	 [АктПогрРазгр] UNIQUEIDENTIFIER  NOT NULL,

	 [Товар] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Товар] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDТовара] INT  NULL,

	 [НаимТовара] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Автомобили] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDАвто] INT  NULL,

	 [ГосНомерАвто] VARCHAR(255)  NULL,

	 [Марка] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЖурналСостТС] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВнешСостТС] VARCHAR(255)  NULL,

	 [Время] INT  NULL,

	 [Дата] DATETIME  NULL,

	 [ПоказОдометра] INT  NULL,

	 [Автомобили] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ПутевойЛист] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] VARCHAR(255)  NULL,

	 [Автомобили] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧПутевойЛ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [МестоНазнач] VARCHAR(255)  NULL,

	 [МестоОтпр] VARCHAR(255)  NULL,

	 [ПРойденоКМ] INT  NULL,

	 [ПутевойЛист] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Сотрудники] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDСотрудника] INT  NULL,

	 [Телефон] INT  NULL,

	 [Удостоверение] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Должности] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Должности] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDДолжности] INT  NULL,

	 [НаимДолжности] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




