install:
	npm ci

gendiff-run:
	gendiff __fixtures__/file1.json __fixtures__/file2.json

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test-coverage:
	npm test -- --coverage