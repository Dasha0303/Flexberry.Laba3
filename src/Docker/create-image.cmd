docker build --no-cache -f SQL\Dockerfile.PostgreSql -t laba3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t laba3/app ../..
