# Data-Anonymizer

A simple algorithm used to anonymize sensitive datasets.

## Usable Data

This anonymizer works with ```CSV``` files, and is calibrated specifically to effect the first two columns of the dataset. This anonymizer preassumes that the first column will be an ```account number``` and that the second will be a ```name```.

## Use

To use, open this project in your text editor. You'll see a variable called ```tableName```. You'll replace the ```placeholder``` with a string formatted file path to the data you'd like to anonymize. Near the end you'll see ```results.xlsx```. This is the output filename which can be changed to a more descriptive or relevant filename if you so choose.

## Things to note

This algorithm utilizies a package called ```bcrypt``` which is used to hash the account number. After hashing, non-numeric characters are filtered out. This results in variable length to the post anonymization account numbers. Currently, the account number is hashed once. This can be increased (at the cost of a longer execution time) by altering the second argument passed into ```hashSync``` to be a higher number.

## Desirable Updates

It would be great keep anonymous account names consistent across datasets (for example "Johnson Landscaping" is "Company 1" in the 1/2/20 dataset AND the 2/5/21 dataset). I'm unsure how this could be accomplished without combining datasets.
