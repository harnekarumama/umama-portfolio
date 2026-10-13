import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import * as cv from '../src/data/cv'

const source = readFileSync(new URL('../Umama_Abdul-Hamid_Ahmed_CV.md', import.meta.url), 'utf8')
const content = JSON.stringify(cv)
const bullets = source.split('\n').filter(line => line.startsWith('- ')).map(line => line.slice(2).trim())

for (const bullet of bullets) {
  assert.ok(content.includes(bullet), `CV content missing: ${bullet}`)
}

assert.ok(source.includes(cv.profile), 'Professional profile differs from the CV')
assert.equal(cv.projects.length, 7)
assert.equal(cv.skills.length, 6)
assert.equal(cv.education.length, 3)
assert.equal(cv.languages.length, 5)
assert.equal(cv.references.length, 2)
for (const reference of cv.references) {
  assert.ok(source.includes(reference.name))
  assert.ok(source.includes(reference.role))
  assert.ok(source.includes(reference.phone))
}
for (const project of cv.projects) {
  if (project.url) {
    assert.equal(new URL(project.url).protocol, 'https:')
  }
}

console.log(`CV check passed: all ${bullets.length} bullet points, full profile, 7 projects, skills, education, languages, and references.`)
