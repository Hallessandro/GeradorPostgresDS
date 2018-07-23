const arquivo = `
<?xml version="1.0" encoding="UTF-8"?>

<!-- ===================================================================== -->
<!--                                                                       -->
<!--  JBoss Server Configuration                                           -->
<!--                                                                       -->
<!-- ===================================================================== -->

<!-- $Id: postgres-ds.xml,v 1.1 2002/07/22 22:57:24 d_jencks Exp $ -->
<!-- ==================================================================== -->
<!--  Datasource config for Postgres                                      -->
<!-- ==================================================================== -->

<datasources>

        <xa-datasource>
                <jndi-name>jdbc/SIPACDB</jndi-name>
                <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>
                
<!--                 <xa-datasource-property name="ServerName">bdrestauracao</xa-datasource-property> -->
<!--                 <xa-datasource-property name="PortNumber">5432</xa-datasource-property> -->
<!--                 <xa-datasource-property name="DatabaseName">ufsj_administrativo_20180701</xa-datasource-property> -->

                <xa-datasource-property name="ServerName">integradora-ufsj</xa-datasource-property>
                <xa-datasource-property name="PortNumber">15432</xa-datasource-property>
                <xa-datasource-property name="DatabaseName">preprod_administrativo</xa-datasource-property>
                
                <xa-datasource-property name="User">sipac</xa-datasource-property>
                <xa-datasource-property name="Password">sipac</xa-datasource-property>

                <track-connection-by-tx/>

                <min-pool-size>10</min-pool-size>
                <max-pool-size>100</max-pool-size>

                <check-valid-connection-sql>select 1</check-valid-connection-sql>
        </xa-datasource>


        <xa-datasource>
                <jndi-name>jdbc/SIGAADB</jndi-name>
                <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>
                <xa-datasource-property name="ServerName">bdrestauracao</xa-datasource-property>
                <xa-datasource-property name="PortNumber">5432</xa-datasource-property>

                <xa-datasource-property name="DatabaseName">ufsj_sigaa_20180611</xa-datasource-property>
                <xa-datasource-property name="User">sigaa</xa-datasource-property>
                <xa-datasource-property name="Password">sigaa</xa-datasource-property>

                <track-connection-by-tx/>

                <min-pool-size>10</min-pool-size>
                <max-pool-size>100</max-pool-size>

                <check-valid-connection-sql>select 1</check-valid-connection-sql>
        </xa-datasource>        

       <xa-datasource>
                <jndi-name>jdbc/SIGRHDB</jndi-name>
                <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>

<!--                 <xa-datasource-property name="ServerName">bdrestauracao</xa-datasource-property> -->
<!--                 <xa-datasource-property name="PortNumber">5432</xa-datasource-property> -->
<!--                 <xa-datasource-property name="DatabaseName">ufsj_administrativo_20180701</xa-datasource-property> -->

                <xa-datasource-property name="ServerName">integradora-ufsj</xa-datasource-property>
                <xa-datasource-property name="PortNumber">15432</xa-datasource-property>
                <xa-datasource-property name="DatabaseName">preprod_administrativo</xa-datasource-property>
                
                <xa-datasource-property name="User">sipac</xa-datasource-property>
                <xa-datasource-property name="Password">sipac</xa-datasource-property>

                <track-connection-by-tx/>

                <min-pool-size>10</min-pool-size>
                <max-pool-size>60</max-pool-size>

                <check-valid-connection-sql>select 1</check-valid-connection-sql>
        </xa-datasource>

	<xa-datasource>
                <jndi-name>jdbc/LogOperacaoDB</jndi-name>
                <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>
                <xa-datasource-property name="ServerName">bddesenv.esig.com.br</xa-datasource-property>
                <xa-datasource-property name="PortNumber">5432</xa-datasource-property>

                <xa-datasource-property name="DatabaseName">ufsj_desenv_sistemas_log</xa-datasource-property>
                <xa-datasource-property name="User">sistemas_log</xa-datasource-property>
                <xa-datasource-property name="Password">sistemas_log</xa-datasource-property>

                <track-connection-by-tx/>

                <min-pool-size>1</min-pool-size>
                <max-pool-size>10</max-pool-size>

                <check-valid-connection-sql>select 1</check-valid-connection-sql>
        </xa-datasource>

       <xa-datasource>
                <jndi-name>jdbc/ComumDB</jndi-name>
                <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>
                
<!--                 <xa-datasource-property name="ServerName">bdrestauracao</xa-datasource-property> -->
<!--                 <xa-datasource-property name="PortNumber">5432</xa-datasource-property> -->
<!--                 <xa-datasource-property name="DatabaseName">ufsj_sistemas_comum_20180611</xa-datasource-property> -->

                <xa-datasource-property name="ServerName">integradora-ufsj</xa-datasource-property>
                <xa-datasource-property name="PortNumber">15432</xa-datasource-property>
                <xa-datasource-property name="DatabaseName">preprod_sistemas_comum</xa-datasource-property>

                <xa-datasource-property name="User">comum_user</xa-datasource-property>
                <xa-datasource-property name="Password">comum_user</xa-datasource-property>

                <track-connection-by-tx/>

                <min-pool-size>1</min-pool-size>
                <max-pool-size>10</max-pool-size>

                <check-valid-connection-sql>select 1</check-valid-connection-sql>
        </xa-datasource>

	<xa-datasource>
                <jndi-name>jdbc/ArquivosDB</jndi-name>
                <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>
                <xa-datasource-property name="ServerName">bddesenv.esig.com.br</xa-datasource-property>
                <xa-datasource-property name="PortNumber">5432</xa-datasource-property>

                <xa-datasource-property name="DatabaseName">ufsj_desenv_base_arquivos</xa-datasource-property>
                <xa-datasource-property name="User">arquivos</xa-datasource-property>
                <xa-datasource-property name="Password">arquivos</xa-datasource-property>

                <track-connection-by-tx/>

                <min-pool-size>1</min-pool-size>
                <max-pool-size>10</max-pool-size>

                <check-valid-connection-sql>select 1</check-valid-connection-sql>
        </xa-datasource>

	 <xa-datasource>
                <jndi-name>jdbc/ArquivosNode1</jndi-name>
                <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>
                <xa-datasource-property name="ServerName">bddesenv.esig.com.br</xa-datasource-property>
                <xa-datasource-property name="PortNumber">5432</xa-datasource-property>

                <xa-datasource-property name="DatabaseName">ufsj_desenv_base_arquivos</xa-datasource-property>
                <xa-datasource-property name="User">arquivos</xa-datasource-property>
                <xa-datasource-property name="Password">arquivos</xa-datasource-property>

                <track-connection-by-tx/>

                <min-pool-size>1</min-pool-size>
                <max-pool-size>10</max-pool-size>

                <check-valid-connection-sql>select 1</check-valid-connection-sql>
        </xa-datasource>

</datasources>`; 

export function montarArquivo(){
    //Ver link
    //https://developers.google.com/web/updates/2015/01/ES6-Template-Strings
}