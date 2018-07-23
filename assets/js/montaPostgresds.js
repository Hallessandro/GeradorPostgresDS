function montarArquivo(bancoAdm, senhaAdm, usuarioAdm, bancoSigaa, senhaSigaa, usuarioSigaa, 
        bancoComum, senhaComum, usuarioComum, serverName, porta, cliente){
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

                <xa-datasource-property name="ServerName">${serverName}</xa-datasource-property>
                <xa-datasource-property name="PortNumber">${porta}</xa-datasource-property>
                <xa-datasource-property name="DatabaseName">${bancoAdm}</xa-datasource-property>
                
                <xa-datasource-property name="User">${usuarioAdm}</xa-datasource-property>
                <xa-datasource-property name="Password">${senhaAdm}</xa-datasource-property>

                <track-connection-by-tx/>

                <min-pool-size>10</min-pool-size>
                <max-pool-size>100</max-pool-size>

                <check-valid-connection-sql>select 1</check-valid-connection-sql>
        </xa-datasource>


        <xa-datasource>
                <jndi-name>jdbc/SIGAADB</jndi-name>
                <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>
                
                <xa-datasource-property name="ServerName">${serverName}</xa-datasource-property>
                <xa-datasource-property name="PortNumber">${porta}</xa-datasource-property>
                <xa-datasource-property name="DatabaseName">${bancoSigaa}</xa-datasource-property>

                <xa-datasource-property name="User">${usuarioSigaa}</xa-datasource-property>
                <xa-datasource-property name="Password">${senhaSigaa}</xa-datasource-property>

                <track-connection-by-tx/>

                <min-pool-size>10</min-pool-size>
                <max-pool-size>100</max-pool-size>

                <check-valid-connection-sql>select 1</check-valid-connection-sql>
        </xa-datasource>        

        <xa-datasource>
                <jndi-name>jdbc/SIGRHDB</jndi-name>
                <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>

                <xa-datasource-property name="ServerName">${serverName}</xa-datasource-property>
                <xa-datasource-property name="PortNumber">${porta}</xa-datasource-property>
                <xa-datasource-property name="DatabaseName">${bancoAdm}</xa-datasource-property>
                
                <xa-datasource-property name="User">${usuarioAdm}</xa-datasource-property>
                <xa-datasource-property name="Password">${senhaAdm}</xa-datasource-property>

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

                <xa-datasource-property name="DatabaseName">${cliente}_desenv_sistemas_log</xa-datasource-property>
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
                        
                <xa-datasource-property name="ServerName">${serverName}</xa-datasource-property>
                <xa-datasource-property name="PortNumber">${porta}</xa-datasource-property>
                <xa-datasource-property name="DatabaseName">${bancoComum}</xa-datasource-property>
                
                <xa-datasource-property name="User">${usuarioComum}</xa-datasource-property>
                <xa-datasource-property name="Password">${senhaComum}</xa-datasource-property>

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

                <xa-datasource-property name="DatabaseName">${cliente}_desenv_base_arquivos</xa-datasource-property>
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

                <xa-datasource-property name="DatabaseName">${cliente}_desenv_base_arquivos</xa-datasource-property>
                <xa-datasource-property name="User">arquivos</xa-datasource-property>
                <xa-datasource-property name="Password">arquivos</xa-datasource-property>

                <track-connection-by-tx/>

                <min-pool-size>1</min-pool-size>
                <max-pool-size>10</max-pool-size>

                <check-valid-connection-sql>select 1</check-valid-connection-sql>
        </xa-datasource>        
</datasources>`; 
        return arquivo;
}