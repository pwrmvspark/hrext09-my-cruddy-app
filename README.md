# hrext09-my-cruddy-app
Create Read Update and Delete framework using JS

 ## Tasks

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

 ### Advanced Reqs
- [ ] Item that I added goes here...


thoughts...
    - App that takes in a user's information (define information) 
    - Calculates(button) Body Mass Index (body fat calculator for the future)
    - stores/saves(button?) 
    - can update(button)


    name/weight/height to start. 
        - need one more element (input text)
        - formula = ((weight lb) / (height in) / (height in)) * 703
    



What formula does the US Navy body fat calculator use?
The equation was developed at the Naval Health Research Center (NHRC), San Diego, California.

For men, it looks like this:
`
%BF = 495 / ( 1.0324 - 0.19077 * log10( waist - neck ) + 0.15456 * log10( height ) ) - 450

And for women:

%BF = 495 / ( 1.29579 - 0.35004 * log10( waist + hip - neck ) + 0.22100 * log10( height ) ) - 450

Please note that the formulas presented above are for measurements in metric units.

JSON stringify//parse