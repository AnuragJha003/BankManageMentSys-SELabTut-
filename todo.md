# GIT USEFUL COMMANDS IMPORTANT 
## Creating Commits In Git, version = commit
### Version history = commit history


## GIT COMMANDS TO KNOW OF 
* ls lists all the folders and files in the current dir 
* cd is for changing the directory 
* git init Git will start tracking all changes in the current folder
* git status Show all changes since the previous commit
* git add file-Pick individual file
* git add folder/ -- Pick all files inside a folder (and subfolders)
* git add . Pick all files (in folder command line is running in)
* git commit -m "message" Creates a commit with a message attached
* Staging Area = contains changes that will go into the next commit
* git add . working => staging
* git commit -m "message" staging => commit history
* git checkout -- <file|folder>
* git checkout -- file
* git checkout -- folder/
* git checkout -- .working => remove the changes
* .gitignore Tell git which files/folders it SHOULD NOT track
* rm -rf .git Remove git from project
* git remote add origin https://github.com/urlhere links a local repo to the remote repo working on 
* git remote -v List all remote repositories (but with more detail)
* git push <remote_name> <branch> Upload a branch of your git version history to your remote repository
* git push origin main example 
* git clone <url> Download a remote repository from a url
* git fetch Updates all remote tracking branches. Remote
* git pull origin main Downloads any new commits from the main branch on origin, and updates the local main branch with those new commits
* git branch f1 creates a new branch by the name f1 containing all the copy of codes present in the main/master branch 
* git checkout f1 switching to the branches 
* HEAD points to where we are working currently 
* Suppose we want to merge f1 branch in main move to main by :git checkout main and then once in main ---git merge f1
## MERGE CONFLICTS 
  This occurs when the same line of code is modified by two or more different developers working on the same or different branch and one of them pushes the changes made 
  into the main branch of the repo and now if any new dev working on it writes something different for the same line of code then it will cuase Merge conflict as same line of code
  is pushed back in two different ways by the developer which is not at ideall 
  
  ## EXAMPLE AND RESOLVING MERGE CONFLICTS 
  ### 1ST DEV TERMINAL
  * git clone url
  * cd into repo 
  *  git branch d1 (new branch )
  * git checkout d1
  * vi (name of file to make changes into)
  *  git add . ,   git commit -m "" (stored in local repo till now)
  
  ### 2ND DEV TERMINAL 
  * same till making changes(make diff modifications) [THIS ONE IS WORKING ON THE MAIN BRANCH]
  * git status( to look at the changes made)
  * git add. , git commit -m "" 
  * git push origin main(pushing the changes made into the remote repo )
  
  ### 1ST DEV 
  * git checkout main 
  * git pull (get the recent changes made by everyone)
  * we see a file has changed in a way we did not expect 
  * git checkout d1(the branch we created)
  * it is not in the way we wanted(as in d1 branch )
  * go to main brancg (git checkout main)
  *  git merge d1
  * MERGE CONFLICT ☹️
  <img src="https://github.com/AnuragJha003/BankManageMentSys-SELabTut-/assets/97457228/6c2dc8ed-f182-4a64-91ae-e534b1923281" >
  <img src="https://github.com/AnuragJha003/BankManageMentSys-SELabTut-/assets/97457228/34c5c4aa-7eee-4d8e-a74c-5d90e33a32e0" >
  *IN THE ABOVE HEAD IS THE FILE MODIFICATION THE CURRENT BRANCH WANTS AND >>> THIS IS THE BRANCH BEING MERGED BRINGS INTO IT 
  * RESOLVE IT BY GOING TO THE FILE CAUSING THE CONFLICT CHANGE IT TO A STANDARD VERSION WHICH ALL THE TEAM MEMBERS AGREE TO
  * AFTER MAKING CHANGES ADD COMMIT AND PUSH TO THE MAIN BRANCH
  ### SUCCESSFULLY RESOLVED MERGED CONFLICT :) 
  
  
  ### EXTRA:
  ### PUSH DENIED ACCESS-- Key with repo and admin access and then added to git remote set url origin .(url with the token key @github )
  ### -f on any commands above means the task is carried out forcefully 
  
  
  # GG
