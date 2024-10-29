var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-propositional-logic",
  "level": "1",
  "url": "sec-propositional-logic.html",
  "type": "Section",
  "number": "1.1",
  "title": "Propositional Logic",
  "body": " Propositional Logic  A proposition is a declarative statement which is either true or false, but not both.   \"Today is Wednesday.\" is a proposition, whereas \"Be careful!\" is not. What about:    In propositional logic (which is also called propositional calculus ) the variables are propositions. We denote the propositional variables by the letters: Given a proposition , we define its negation  (read \" not  \") as the proposition which is (T)rue exactly when is (F)alse. Accordingly, the truth table of the negation operator is as follows:   The negation operator is an example of a logical operator . We can also form new propositions, called compound propositions from the atomic propositions  by using the logical operators . Those logical operators will be called connectives . For example the conjunction of the propositions and , denoted and read \"  and  \", is the proposition that is true exactly when both and are true:    What is the negation of the statement: Zach blocks e-mails and texts from Jennifer.    Try to observe that the statement Zach does not block e-mails or he does not block texts from Jennifer. is true if and only if the given statement is false.    The disjunction (also called the inclusive or ) of the propositions and , denoted and read \"  or  \", is the proposition that is false exactly when both and are false:    If and are the propositions  \"A password must have at least three digits\"  \"A password must be at least eight characters long\"  then their disjunction would be the statement:  \"A password must have at least three digits or be at least eight characters long\"    The exclusive or of the propositions and , denoted , is the proposition that is true when exactly one of and is true and is false otherwise:    If and are the statements  \"Coffee comes with diner\"  \"Tea comes with dinner\"  then their exclusive or would be the proposition:  \"Coffee or tea comes with dinner\"      Let and be the propositions:  \"You can pay using U.S. dollars\"  \"You can pay using euros.\"    For the following statement, what is the intended meaning, or :  \"You can pay using U.S. dollars or euros.\"      We don't know. The intended meaning may be apparent within the context. Maybe it is not a problem if we pay partly U.S. dollars and partly euros as soon as the total amount is compensated or maybe it is an online transaction and we must pay the total amount at once either by choosing U.S. dollar or by choosing euro as the currency.    "
},
{
  "id": "sec-propositional-logic-2",
  "level": "2",
  "url": "sec-propositional-logic.html#sec-propositional-logic-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proposition "
},
{
  "id": "sec-propositional-logic-3",
  "level": "2",
  "url": "sec-propositional-logic.html#sec-propositional-logic-3",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": " \"Today is Wednesday.\" is a proposition, whereas \"Be careful!\" is not. What about:   "
},
{
  "id": "sec-propositional-logic-4",
  "level": "2",
  "url": "sec-propositional-logic.html#sec-propositional-logic-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "propositional logic propositional calculus propositional variables negation truth table "
},
{
  "id": "sec-propositional-logic-5",
  "level": "2",
  "url": "sec-propositional-logic.html#sec-propositional-logic-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logical operator compound propositions atomic propositions logical operators connectives conjunction "
},
{
  "id": "sec-propositional-logic-6",
  "level": "2",
  "url": "sec-propositional-logic.html#sec-propositional-logic-6",
  "type": "Question",
  "number": "1.1.2",
  "title": "",
  "body": " What is the negation of the statement: Zach blocks e-mails and texts from Jennifer.    Try to observe that the statement Zach does not block e-mails or he does not block texts from Jennifer. is true if and only if the given statement is false.   "
},
{
  "id": "sec-propositional-logic-7",
  "level": "2",
  "url": "sec-propositional-logic.html#sec-propositional-logic-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "disjunction inclusive or "
},
{
  "id": "sec-propositional-logic-8",
  "level": "2",
  "url": "sec-propositional-logic.html#sec-propositional-logic-8",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": " If and are the propositions  \"A password must have at least three digits\"  \"A password must be at least eight characters long\"  then their disjunction would be the statement:  \"A password must have at least three digits or be at least eight characters long\"   "
},
{
  "id": "sec-propositional-logic-9",
  "level": "2",
  "url": "sec-propositional-logic.html#sec-propositional-logic-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exclusive or "
},
{
  "id": "sec-propositional-logic-10",
  "level": "2",
  "url": "sec-propositional-logic.html#sec-propositional-logic-10",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": " If and are the statements  \"Coffee comes with diner\"  \"Tea comes with dinner\"  then their exclusive or would be the proposition:  \"Coffee or tea comes with dinner\"   "
},
{
  "id": "sec-propositional-logic-11",
  "level": "2",
  "url": "sec-propositional-logic.html#sec-propositional-logic-11",
  "type": "Question",
  "number": "1.1.5",
  "title": "",
  "body": "  Let and be the propositions:  \"You can pay using U.S. dollars\"  \"You can pay using euros.\"    For the following statement, what is the intended meaning, or :  \"You can pay using U.S. dollars or euros.\"      We don't know. The intended meaning may be apparent within the context. Maybe it is not a problem if we pay partly U.S. dollars and partly euros as soon as the total amount is compensated or maybe it is an online transaction and we must pay the total amount at once either by choosing U.S. dollar or by choosing euro as the currency.   "
},
{
  "id": "sec-propositional-equivalences",
  "level": "1",
  "url": "sec-propositional-equivalences.html",
  "type": "Section",
  "number": "1.2",
  "title": "Propositional Equivalences",
  "body": " Propositional Equivalences  Text of section.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
