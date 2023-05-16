function wordtypes(Noun, Adjective, Verb, Adverb)
{
    var result = "";
    result += "The " +Adjective + " " +Noun + " " +Verb + " " + "to the store " + Adverb
    return result;
}
console.log(wordtypes("dog", "big", "ran", "quickly"))
console.log(wordtypes("bike", "slow", "flew", "slowly"))