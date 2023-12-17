



CREATE TABLE "АктПогрРазгр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Тип" NVARCHAR2(9) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧАктПГ"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВесТовараКонец" FLOAT(126) NULL,

	"ВремявПути" FLOAT(126) NULL,

	"ОтклоненияВеса" NVARCHAR2(255) NULL,

	"МестоРазгрузки" NVARCHAR2(255) NULL,

	"ВесТовараНачало" FLOAT(126) NULL,

	"МестоПогрузки" NVARCHAR2(255) NULL,

	"АктПогрРазгр" RAW(16) NOT NULL,

	"Товар" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Товар"
(

	"primaryKey" RAW(16) NOT NULL,

	"НаимТовара" NVARCHAR2(255) NULL,

	"IDТовара" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Автомобили"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDАвто" NUMBER(10) NULL,

	"Марка" NVARCHAR2(255) NULL,

	"ГосНомерАвто" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЖурналСостТС"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"ПоказОдометра" NUMBER(10) NULL,

	"Время" NUMBER(10) NULL,

	"ВнешСостТС" NVARCHAR2(255) NULL,

	"Автомобили" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПутевойЛист"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" NVARCHAR2(255) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"Автомобили" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧПутевойЛ"
(

	"primaryKey" RAW(16) NOT NULL,

	"МестоНазнач" NVARCHAR2(255) NULL,

	"ПРойденоКМ" NUMBER(10) NULL,

	"МестоОтпр" NVARCHAR2(255) NULL,

	"ПутевойЛист" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"Телефон" NUMBER(10) NULL,

	"Удостоверение" NUMBER(10) NULL,

	"IDСотрудника" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDДолжности" NUMBER(10) NULL,

	"НаимДолжности" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "АктПогрРазгр"
	ADD CONSTRAINT "АктПогрРазгр__8586" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "АктПогрРазгр__5226" on "АктПогрРазгр" ("Сотрудники");

ALTER TABLE "ТЧАктПГ"
	ADD CONSTRAINT "ТЧАктПГ_FАктП_2169" FOREIGN KEY ("АктПогрРазгр") REFERENCES "АктПогрРазгр" ("primaryKey");

CREATE INDEX "ТЧАктПГ_IАктП_8953" on "ТЧАктПГ" ("АктПогрРазгр");

ALTER TABLE "ТЧАктПГ"
	ADD CONSTRAINT "ТЧАктПГ_FТовар_0" FOREIGN KEY ("Товар") REFERENCES "Товар" ("primaryKey");

CREATE INDEX "ТЧАктПГ_IТовар" on "ТЧАктПГ" ("Товар");

ALTER TABLE "ЖурналСостТС"
	ADD CONSTRAINT "ЖурналСостТС_F_888" FOREIGN KEY ("Автомобили") REFERENCES "Автомобили" ("primaryKey");

CREATE INDEX "ЖурналСостТС__6847" on "ЖурналСостТС" ("Автомобили");

ALTER TABLE "ЖурналСостТС"
	ADD CONSTRAINT "ЖурналСостТС__8450" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ЖурналСостТС__1204" on "ЖурналСостТС" ("Сотрудники");

ALTER TABLE "ПутевойЛист"
	ADD CONSTRAINT "ПутевойЛист_F_6738" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ПутевойЛист_I_4141" on "ПутевойЛист" ("Сотрудники");

ALTER TABLE "ПутевойЛист"
	ADD CONSTRAINT "ПутевойЛист_F_9183" FOREIGN KEY ("Автомобили") REFERENCES "Автомобили" ("primaryKey");

CREATE INDEX "ПутевойЛист_I_9784" on "ПутевойЛист" ("Автомобили");

ALTER TABLE "ТЧПутевойЛ"
	ADD CONSTRAINT "ТЧПутевойЛ_FП_1532" FOREIGN KEY ("ПутевойЛист") REFERENCES "ПутевойЛист" ("primaryKey");

CREATE INDEX "ТЧПутевойЛ_IП_2081" on "ТЧПутевойЛ" ("ПутевойЛист");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_4635" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6967" on "Сотрудники" ("Должности");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


