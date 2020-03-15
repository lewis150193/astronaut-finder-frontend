const { findLongestName, makeDashLine } = require("../../utils/utils");
const assert = require('assert');

const mockData =  [
    {
        craft: "ISS",
        name: "Andrew Morgan",
        lastName: "Morgan"
    },
    {
        craft: "ISS",
        name: "Oleg Skripochka",
        lastName: "Skripochka"
    },
    {
        craft: "ISS",
        name: "Jessica Meir",
        lastName: "Meir"
    }
];

    describe('Utils tests', () => {
        it('should return the longest name length', () => {
       const longestName = findLongestName(mockData,"name");
            assert.equal(longestName, 15);
        });

        it('should return the longest craft length', () => {
       const longestCraftName = findLongestName(mockData,"craft");
            assert.equal(longestCraftName, 3);
        });

        it('should return the longest craft length', () => {
            assert.equal(makeDashLine(mockData,"name"), "-----------------");
        });

        it('should return the longest craft length', () => {
            assert.equal(makeDashLine(mockData,"craft"), "-----");
        });
    });
