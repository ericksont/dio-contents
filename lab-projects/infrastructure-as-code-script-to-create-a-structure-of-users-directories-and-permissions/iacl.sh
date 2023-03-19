#!/bin/bash

echo "Creating directories..."

mkdir /public
mkdir /adm
mkdir /sal
mkdir /sec

echo "Creating user groups..."

groupadd GRP_ADM
groupadd GRP_SAL
groupadd GRP_SEC

echo "Creating users..."

useradd carlos -m -s /bin/bash -p $(openssl passwd --crypt Pass123) -G GRP_ADM
useradd maria -m -s /bin/bash -p $(openssl passwd --crypt Pass123) -G GRP_ADM
useradd joao -m -s /bin/bash -p $(openssl passwd --crypt Pass123) -G GRP_ADM

useradd debora -m -s /bin/bash -p $(openssl passwd --crypt Pass123) -G GRP_SAL
useradd sebastiana -m -s /bin/bash -p $(openssl passwd --crypt Pass123) -G GRP_SAL
useradd roberto -m -s /bin/bash -p $(openssl passwd --crypt Pass123) -G GRP_SAL

useradd josefina -m -s /bin/bash -p $(openssl passwd --crypt Pass123) -G GRP_SEC
useradd amanda -m -s /bin/bash -p $(openssl passwd --crypt Pass123) -G GRP_SEC
useradd rogerio -m -s /bin/bash -p $(openssl passwd --crypt Pass123) -G GRP_SEC

echo "Specifying directory permissions..."

chown root:GRP_ADM /adm
chown root:GRP_SAL /sal
chown root:GRP_SEC /sec

chmod 770 /adm
chmod 770 /sal
chmod 770 /sec
chmod 777 /public

echo "End!"