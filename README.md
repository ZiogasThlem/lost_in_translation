# **Lost in Translation**

By Ziogas Tilemachos and George Pegias

The project is also deployed at https://lost-in-translation-1.vercel.app/translation

This is the second assignment of the FrontEnd section of Noroff FullStack Course. It is a React project, making use of some Bootstrap classes for styling.

We used two separate branches to work our way through the project with our names on each of them, and of course the master branch that has the final product. In the end of each day we reviewed the progress each of us individually was making and collectively deciding what to implement and what not to. For the purpose of having a better understanding of React while working through this project, we both worked on some of the same requirements alongside of watching the provided example videos.

The project result is a web application that, making use of an API acting as a Database, represents an interpreter, a translator from English to American Sign Language. In reality, each letter is translated individually, thus the "translation" is not an actual ASL word, rather the sum of the ASL letters that would represent the word. The web app consists of three pages:

- **Login Page:**   The first thing that a user witness when they enter is (besides the heartwarming Robot that greets them!) a login form that upon passing their desired username, will redirect them to the Translation page.
- **Translation Page:**  The user is then urged to enter some words to the Translation form. We let the user know, that they cannot enter any numbers or special characters in the form, as words that contain them will not be translated Once they click on the Translate button, the word they typed appears in the box below as a set of ASL letters! Not only that, the word is also stored in the user's profile.
- **Profile Page:**  The user can access this page (as well as the Translation page) from the Navbar link, as long as they are logged in. Here, they can see they last 10 words they translated, and have the option to clear their history or even log out of the web app (they are warned about each of the choices in case they change their mind).

The project consists of the following directories (excluding the default React files):

  1. **api directory:** There, all the functions needed for interacting with the API, in three JS scripts, are placed.
  2. **context directory:** There, a single .jsx file is placed, that "wraps" around the main App component in the index.js file, thus passing the essential information about the user, through all pages
  3. **miscellaneous directory:** There, we can find a storage.js script which is used to perform the Save, Read and Delete actions to the session storage memory about the user and the user's translations, and the withAuth.jsx file that confirms that the user that navigates to each page is authorized to do so (basically checks if user is present in the session storage) and if not, it automatically navigates to the Login page.
  4. **pages directory:** There, the parent components for each of the web application's pages are placed. The Login and Profile pages only have the basic component functionality. Diving into the Translation page, we implemented most of the page's functionality directly here. In previous commits there is an approach with the code shared among child components, but in reality it was the same functionality with more a lot more code lines.
  5. **components directory:** In this directory there are placed four subdirectories which we will refer to each separately:
  - **Login components:** There are placed the LoginForm component, responsible for redirecting the user to the next page, through an input form and the LoginHeader component.
  - **Translation components:** As the page's functionality is placed in the parent Translation.jsx component, only the TranslationHeader is found in this directory.
  - **Profile components:** Four components are placed here: the TranslatedWord component is basically a list item, that represents each translated into ASL word that will be displayed in the ListOfTranslatedWords component. The ProfileButtons component include the Logout and Clear History buttons' functionality and lastly, of course, the ProfileHeader component.
  - **NavBar components:** Lastly there we can find the Navbar with, from left to right, the web application's name, the links to the Translation and Profile pages and the each time logged in user's name, that is only present on these two pages, and a simple footer component that is always present.
  - Two .pdf files with the Component Tree and the Wireframe we designed. The final project differs a little, but they were both acted as guides through the project implementation.
