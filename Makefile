tsc:
	rm -rf build/*
	tsc

run:
	node build/index.js
