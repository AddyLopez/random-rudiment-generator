# 40 International Drum Rudiments Generator

**_View this project:_** [https://visionary-sunflower-70af02.netlify.app/](https://visionary-sunflower-70af02.netlify.app/)

## Description & Usage

This single-page application (SPA) generates a randomized set of rudiments, correctly numbered, from the Percussive Arts Society's codified list of 40 International Drum Rudiments. It may be used as a practice tool or compositional aid for drummers and percussionists.

Simply enter the number of rudiments desired—between one and ten—and check up to four boxes. In producing its randomized selection, the generator will consider only those categories marked.

Originally assigned as an open-ended student project for Codecademy's Full Stack Path, which called for a simple randomized message generator program for the console, this application I coded is far more sophisticated in its logic, organization, technical considerations, and scope. Meeting the more difficult challenges I set for myself, I built and designed a responsively styled front-end interface that accommodates a broader range of results, curated my own relatively complex data set, and implemented a recursive solution to put my theoretical knowledge of algorithms to the test.

## Coding Features & Processes

- **_ES6 modular organization to support maintainability via a separation of concerns and to facilitate debugging._** Taking the Single Responsibility Principle from SOLID design patterns as a guide, each file has its own clear responsibility; for example, the rudiments data set is in a file apart from the randomization logic, which is in its own file, while the application's main logic handling the submitted form is in its own file.

- **_Beneficial early prototyping of the UI before writing the randomization logic or injecting dynamic data._** By outlining the user's behavior through a viable prototype, I leveraged my front-end experience to inform back-end solutions and write only relevant code that was closely tailored to the problems and expectations defined. Doing so not only positively affected how I organized the data set but helped me to visualize the proper tree structure and to determine what information was srictly necessary.

- **_Rather than relying on an API with an external data set, I curated my own credible data set as a well-organized array of objects._** I made creative use of JS functions and methods to eliminate tedious and inefficient manual data entry of the image file paths and rudiment types. These techniques are highly valuable when working with large sets of data.

- **_Successful handling of HTML form submission and data filtering._** I learned how to extract data from two input types that I had not previously worked with--checkbox and number inputs--and how to perform complex operations on that user-generated information. Instead of using those inputs in a simplistic additive way, as perhaps a checkbox might be used to add pizza toppings to a food order online, I made unconventional use of the checkboxes and number input to filter the data. To make this application a more useful tool for composers and musicians, the checkboxes filter the categories of drum rudiments under consideration when the randomized selection process takes place. Instead of returning simply the proper number of randomized rudiments from the entire set of forty drum rudiments, the user's preference for a particular category or particular categories will be respected in the results.

  - Judicious implementation of fallbacks like _required_ attributes and an _alert_ to prompt the user to take appropriate actions for successful form submissions.

- **_Dynamic DOM manipulation based on user input._** Rather than appending newly created elements one by one directly to the DOM, I learned how to append those new elements to a document fragment first, which when complete is then appended to the active document tree structure. This latter method is thought by some to confer a performance advantage over the former. Text content along with _src_ and _alt_ attributes are added dynamically (not statically) by reference to properties' values in the data set. Upon submission of the form, the user's inputs are cleared and children nodes from the set of previous results are removed from the tree before new results are generated and added to the tree. Therefore the number of rudiments returned on the updated interface always corresponds with the number that the user most recently submitted.

- **_Implementation of a recursive solution to the problem of randomization._** Although the time complexity of recursive algorithms is not ideal since it depends on the--in this case, variable--number of function calls made, I gained valuable hands-on experience applying my knowledge and working through secondary problems connected with recursion, such as the potential for a stack overflow.

  - Problems solved with recursion:

    - I employ recursion in the function _getRandomIndex_ to ensure that the randomized index returned respects minimum and maximum limits and thereby facilitates the filtering of indices according to the four categories handled in the switch statement.

    - In the function _selectIndexFromSet_, I use recursion for the second time in order to ensure that only unique indices are included in the final selection. Therefore the possibility of redundancies in the preliminary set is handled, and in the end the user interface reflects a set of rudiments without duplicates. By winnowing down the final selection in this function _selectIndexFromSet_ from a larger set of indices generated by the switch statement, my solution also eliminates bias from the results towards any given category. Read the annotations in _rudiment-selector-logic.js_ for a more detailed explanation.

  - Edge-case problem arising from recursion:

    - Because category two, "Diddle Rudiments," contains only four drum rudiments, the odds of generating duplicates in the preliminary set returned by the switch statement when category two was checked was quite high. Therefore the number of recursive calls to replace duplicates with only unique indices threatened a high likelihood of triggering a stack overflow, which is an error that persistently occured when I tested an early version of my recursive solution on this edge case in the console. To overcome this problem, I used a loop to generate a much larger set of indices that was far more likely to include, even with redundancies, all four possibilities. When the preliminary set of indices was then forwarded to the recursive function _selectIndexFromSet_, limitations were effectually placed on the total number of function calls that could be made to generate a set of unique indices for the final selection. That's how I was able to use statistical reasoning to dim the likelihood of a stack overflow to virtually nil. I also implemented error handling with a try/catch block as a safeguard against a stack overflow. Take a look at the annotations in _rudiment-selector-logic.js_ for step-by-step details.

- Careful strategic **_logging_** to test and verify the results of my code throughout the entire building of this application. I made sure that everything was working bug-free in the console before I connected the program to the user interface with dynamic data.

- Clear **_annotations_** serve the purpose of documentation for myself and others to understand my thought process. Writing annotations not only solidifed my understanding as a student but also forced me to justify each line of code or refactor if the purpose of that code was not evident.

- **_Accessibility rating_** by Lighthouse audit: 100/100 for desktops, 100/100 for mobile devices.

- Coded in VS Code with tools for a **_professional development workflow and continuous deployment_**, such as Live Server, GitHub, and hosting on Netlify

## Project Previews

- Submit form:

![40 International Drum Rudiments Generator form preview](./src/images/Project_Preview/rudiments-generator-preview-1.png)

- Example of results:

![40 International Drum Rudiments Generator results preview](./src/images/Project_Preview/rudiments-generator-preview-2.png)

## Attribution & Drum Education

Proper attribution for the data is included to boost the credibility of the application and to show a conscientious ethos of transparency in the public presentation of data online.

Musical notation courtesy of the Percussive Arts Society: [https://www.pas.org/resources/rudiments](https://www.pas.org/resources/rudiments)

Download a [pdf of all 40 International Drum Rudiments](https://www.pas.org/docs/default-source/default-document-library/pas-drum-rudiments-2018dcccc96de1726e19ba7fff00008669d1.pdf?sfvrsn=fdbeaea5_6) and start drumming today!
