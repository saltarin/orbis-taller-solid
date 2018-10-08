tsc:
	rm -rf build/*
	npm run tsc

run:
	node build/index.js

start: 
	@make tsc
	@make run