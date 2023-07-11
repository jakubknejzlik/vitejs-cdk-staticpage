include .env
export

deploy:
	npm run deploy
_destroy:
	npm run destroy
watch:
	npm run watch
sso:
	aws sso login

publish: 
	npm run publish