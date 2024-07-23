import Text "mo:base/Text";
import Result "mo:base/Result";
import HashMap "mo:base/HashMap";
import Blob "mo:base/Blob";
import Time "mo:base/Time";
import Buffer "mo:base/Buffer";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Bool "mo:base/Bool";
import Types "types";
actor devshub{
  type RegisterPayload={
    username:Text;
    avatarurl:Text;
    userbio:Text;
  };
  type GetDeveloperPayload={
    username:Text;
  };
  type Developer=Types.Developer;
  type Article=Types.article;
  type Project=Types.project;
  type Comment=Types.comment;
  type Result<Ok,Err> =Types.Result<Ok,Err>;
  type HashMap<K,V> =Types.HashMap<K,V>; 
  let devs:HashMap<Text,Developer> =HashMap.HashMap<Text,Developer>(0,Text.equal,Text.hash);
   let devsonprincipals:HashMap<Principal,Developer> =HashMap.HashMap<Principal,Developer>(0,Principal.equal,Principal.hash);
 // let devsonprincipal:HashMap<Principal,Developer> =HashMap.HashMap<Principal,Developer>(1,Principal.equal,Principal.hash);
  let devsarticles:HashMap<Principal,Article> =HashMap.HashMap<Principal,Article>(1,Principal.equal,Principal.hash);
  let devsprojects:HashMap<Principal,Project> =HashMap.HashMap<Principal,Project>(2,Principal.equal,Principal.hash);
  let devsprojectsBasedOnName:HashMap<Text,Project> =HashMap.HashMap<Text,Project>(3,Text.equal,Text.hash);
    public shared ({caller}) func registerDeveloper(payload:RegisterPayload):async Result.Result<Developer,Text>{
      switch(devs.get(payload.username)){
        case(null){
          let newDeveloper:Developer={
            userName=payload.username;
            userBio=payload.userbio;
            principalId=caller;
            avatar=payload.avatarurl;
            followers=[];
            following=[];
            projects=[];
            articles=[];
            communities=[];
          };
          devs.put(payload.username,newDeveloper);
          devsonprincipals.put(caller,newDeveloper);
          return #ok(newDeveloper);
        };
        case(?_logined){
          return #err("you are already registered into devshub try to login");
        }
      }
    };
    public shared ({caller}) func updateDeveloper(payload:RegisterPayload):async Result.Result<Developer,Text>{
      switch(devs.get(payload.username)){
        case(null){
          #err("failed to upadet")
          
        };
        case(?_logined){
          let newDeveloper:Developer={
            userName=payload.username;
            userBio=payload.userbio;
            principalId=caller;
            avatar=payload.avatarurl;
            followers=[];
            following=[];
            projects=[];
            articles=[];
            communities=[];
          };
          devs.put(payload.username,newDeveloper);
          devsonprincipals.put(caller,newDeveloper);
          return #ok(newDeveloper);
        }
      }
    };
    public query func getaDeveloper(payload:GetDeveloperPayload):async Result<Developer,Text>{
      switch(devs.get(payload.username)){
        case(null){
          return #err("there is no developer asscoiated with this username");
        };
        case(?developer){
          return #ok(developer)
        };
      }
    };
    public shared ({caller})func getdeveloperPrincipal():async Result.Result<Developer,Text>{
      switch(devsonprincipals.get(caller)){
        case (null){
          return #err("failed")
        };
        case (?developer){
          return #ok(developer)
        };
      }
    };
    public shared ({caller}) func writeArticle(username:Text,articleTitle:Text,articledescription:Text,articleavatar:Text):async Text{
      let newarticle:Article={
        id=caller;
        by=username;
        articleTitle=articleTitle;
        articledescription=articledescription;
        likes=[];
        comments=[];
        articleAvatar=articleavatar;
        created_at=Time.now();
      };
      switch(devs.get(username)){
        case(null){
          return "failed to write artilce";
        };
        case (?developer){
          let articlesBuffer = Buffer.fromArray<Article>(developer.articles);
           articlesBuffer.add(newarticle);
           let updatedArticles = Buffer.toArray(articlesBuffer);
           let updatedDeveloper: Developer = {
                userName = developer.userName;
                userBio=developer.userBio;
                principalId = developer.principalId;
                avatar = developer.avatar;
                followers = developer.followers;
                following = developer.following;
                projects = developer.projects;
                articles = updatedArticles;
                communities = developer.communities;
            };
        devs.put(username, updatedDeveloper);
        devsarticles.put(caller,newarticle);
            return "Article added successfully";
    };};
    };
     //like an article
     public shared ({caller}) func likeAnArticle(articleId:Principal):async Text{
      //verify if developer is laready logged in
      switch(devsarticles.get(articleId)){
        case null{
          return "not logged in ";
        };
        case(?articleFound){
          //update likes
           let likesBuffer = Buffer.fromArray<Principal>(articleFound.likes);
           likesBuffer.add(caller);
           let updatedLikes = Buffer.toArray(likesBuffer);
           let updatedArticle: Article = {
                id= articleFound.id;
                by = articleFound.by;
                articleTitle = articleFound.articleTitle;
                articledescription = articleFound.articledescription;
                likes = updatedLikes;
                comments = articleFound.comments;
                articleAvatar = articleFound.articleAvatar;
                created_at = articleFound.created_at;
            };
              devsarticles.put(caller, updatedArticle);
              //update on developers articles array
            return "Like added successfully";
        }

      }
     };
     
     //get a specific article
public query func getArticle(articleId: Principal): async Result.Result<?Article, Text> {
    switch(devsarticles.get(articleId)) {
        case null {
            return #err("No article found");
        };
        case (?article) {
            return #ok(?article);
        };
    }
};
//owner delet the article
public shared ({caller}) func deleteArticle(articleId: Principal): async Text {
     switch(devsarticles.get(articleId)) {
        case (null) {
            return "No article found";
        };
        case (?article) {
            if (Principal.equal(caller, article.id)) {
                devsarticles.delete(articleId);
                return "Article deleted successfully";
            } else {
                return "Only the owner can delete this article";
            }
        };
    
   }};
   public shared ({caller}) func addCommentToArticle(articleId:Principal,commentmessage:Text,username:Text):async Text{
      //verify if developer is laready logged in
      let newComment:Comment={
                  by=caller;
                  username=username;
                  commentmessage=commentmessage;
                  time_commented=Time.now();
                };
      switch(devsarticles.get(articleId)){
        case null{
          return "not logged in ";
        };
        case(?articleFound){
          //update likes
           let commentsBuffer = Buffer.fromArray<Comment>(articleFound.comments);
                
           commentsBuffer.add(newComment);
           let updatedComment = Buffer.toArray(commentsBuffer);
           let updatedArticle: Article = {
                id= articleFound.id;
                by = articleFound.by;
                articleTitle = articleFound.articleTitle;
                articledescription = articleFound.articledescription;
                likes =articleFound.likes;
                comments = updatedComment;
                articleAvatar = articleFound.articleAvatar;
                created_at = articleFound.created_at;
            };
              devsarticles.put(caller, updatedArticle);
              //update on developers articles array
            return "Like added successfully";
        }

      }
     };
     //function to retrives all articles
     public query func getAllArticles():async [Article]{
     
      return Iter.toArray(devsarticles.vals());
     };
     public shared ({caller}) func createNewProject(username:Text,nameofproject:Text,title:Text,problemsolving:Text,tech:Text,avatarurl:Text,opensource:Bool,glink:Text,des:Text,fundme:Bool,category:Text):async Text{
      let newproject:Project={
        nameOfProject=nameofproject;
        titleOfProject=title;
        problemSolving=problemsolving;
        avatarUrl=avatarurl;
        openSource=opensource;
        githubLink=glink;
        descriptionOfProject=des;
        ownerOfProject=caller;
         technologyUsed=tech;
        likes=[];
        comments=[];
        categories=category;
        lookingForFunding=fundme;
      };
       switch(devs.get(username)){
        case(null){
          return "failed to publish projects";
        };
        case (?developer){
          let projectBuffer=Buffer.fromArray<Project>(developer.projects);
           projectBuffer.add(newproject);
       
        let updatedDeveloperProject=Buffer.toArray(projectBuffer);
        let updatedDeveloper:Developer = {
                userName = developer.userName;
                userBio=developer.userBio;
                principalId = developer.principalId;
                avatar = developer.avatar;
                followers = developer.followers;
                following = developer.following;
                projects = updatedDeveloperProject;
                articles = developer.articles;
                communities = developer.communities;
          };
         devs.put(username,updatedDeveloper);
        
        devsprojects.put(caller,newproject);
        devsprojectsBasedOnName.put(nameofproject,newproject);
        
            return "project added successfully";
    };};
     };
     //getAprojects
     public query func getAProject(nameofproject:Text):async Result.Result<Project,Text>{
         switch(devsprojectsBasedOnName.get(nameofproject)){
          case(null){
            return #err("project not found");
          };
          case(?projectfound){
            return #ok(projectfound);
          };
         };
     };
     //function to retrives all projects
      public query func getAllProjects():async [Project]{
     
      return Iter.toArray(devsprojects.vals());
     };
     //add likes to project
     public shared ({caller}) func addLIkeToProject(idofproject:Principal):async Text{
      switch(devsprojects.get(idofproject)){
        case (null){
          return "like added";
        };
        case (?project){
          let bufferprojectlikes=Buffer.fromArray<Principal>(project.likes);
          bufferprojectlikes.add(caller);
          let updatedlikesprojects=Buffer.toArray(bufferprojectlikes);
           let updatedProject:Project={
              nameOfProject=project.nameOfProject;
              titleOfProject=project.titleOfProject;
              problemSolving=project. problemSolving;
              avatarUrl=project.avatarUrl;
              openSource=project.openSource;
              githubLink=project.githubLink;
              descriptionOfProject=project.descriptionOfProject;
              ownerOfProject=project.ownerOfProject;
              technologyUsed=project.technologyUsed;
              likes=updatedlikesprojects;
              comments=project.comments;
              categories=project.categories;
              lookingForFunding=project.lookingForFunding;
      };
      //updatedevelopers and projectsby name
         
      devsprojects.put(caller,updatedProject);
       devsprojectsBasedOnName.put(project.nameOfProject,updatedProject);
      return "liked";
           
        }
      }
     };
     //add comment
      public shared ({caller}) func addCommentToProject(username:Text,idofproject:Principal,commentContent:Text):async Text{
      switch(devsprojects.get(idofproject)){
        case (null){
          return "failed to add comment";
        };
        case (?project){
          let bufferprojectComment=Buffer.fromArray<Comment>(project.comments);
         
          let newComment:Comment={
                  by=caller;
                  username=username;
                  commentmessage=commentContent;
                  time_commented=Time.now();
                };
                 bufferprojectComment.add(newComment);
          let updatedCommentprojects=Buffer.toArray(bufferprojectComment);
           let updatedProject:Project={
              nameOfProject=project.nameOfProject;
              titleOfProject=project.titleOfProject;
              problemSolving=project. problemSolving;
              avatarUrl=project.avatarUrl;
              openSource=project.openSource;
              githubLink=project.githubLink;
              descriptionOfProject=project.descriptionOfProject;
              ownerOfProject=project.ownerOfProject;
              technologyUsed=project.technologyUsed;
              likes=project.likes;
              comments=updatedCommentprojects;
              categories=project.categories;
              lookingForFunding=project.lookingForFunding;
      };
      //updatedevelopers and projectsby name
         
      devsprojects.put(caller,updatedProject);
       devsprojectsBasedOnName.put(project.nameOfProject,updatedProject);
      return "commented successfully";
           
        }
      }
     };
     //whaoami
     public shared query (msg) func getid():async Principal{
      return msg.caller;
     }
}
