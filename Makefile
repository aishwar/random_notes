app: dbstart
	@ supervisor app.js;

dbstart: dbstop
	@ if [ -s "./tmp/mongod.lock" ]; then \
		echo "db is already up"; \
	else \
		echo "Starting db..."; \
		mongod --fork --logpath tmp/mongod.log --logappend --rest --dbpath=tmp/; \
		sleep 1; \
	fi

dbstop:
	@ echo "Stopping database"; \
	while [ -s "./tmp/mongod.lock" ]; do \
		kill -2 `cat ./tmp/mongod.lock`; \
		sleep 1; \
	done; \
	echo "Database stopped"; \

dbpid:
	@ echo `cat tmp/mongod.lock`;

