## Nodejs & typescript setup on ubuntu 18.04
- Set up http proxy
```
sudo snap set system proxy.http=$http_proxy
sudo snap set system proxy.https=$https_proxy
```
- Install node lts
```
sudo snap install node --classic
```
- Set up npm proxy
```
npm config set proxy $http_proxy
npm config set https-proxy $https_proxy
npm config set strict-ssl false
```
- Set up training folder(You can also just clone this repo)
```
mkdir training
cd training
yarn init -y
```
- Copy tsconfig from here

## Setting up jest for tests
- yarn add -D jest@26
- yarn add -D @types/jest
- yarn add -D ts-jest@26  
