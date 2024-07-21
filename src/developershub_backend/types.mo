import Text "mo:base/Text";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Result "mo:base/Result";
import Blob "mo:base/Blob";

import Bool "mo:base/Bool";
import Time "mo:base/Time";
import Buffer "mo:base/Buffer";
module{
    public type  comment={
        by:Principal;
        username:Text;
        commentmessage:Text;
        time_commented:Time.Time;
    };
    public type Upadtes={};
    public type project={
        nameOfProject:Text;
        titleOfProject:Text;
        problemSolving:Text;
        avatarUrl:Text;
        openSource:Bool;
        githubLink:Text;
        descriptionOfProject:Text;
        ownerOfProject:Principal;
        technologyUsed:Text;
        likes:[Principal];
        comments:[comment];
        categories:Text;
        lookingForFunding:Bool;


    };
    public type follower={
        userName:Text;
        principalId:Text;
    };

    public type article={
        id:Principal;
        by:Text;
        articleTitle:Text;
        articledescription:Text;
        likes:[Principal];
        comments:[comment];
        articleAvatar:Text;
        created_at:Time.Time;
    };
    public type  community={
        name:Text;
        title:Text;
        owner:Principal;
        description:Text;
        members:[Developer];
        messages:[Message];
    };
    public type Message={
        by:Principal;
        username:Text;
        message:Text;
        create_at:Nat64;
    };

    public type Developer={
        userName:Text;
        principalId:Principal;
        avatar:Text;
        followers:[follower];
        following:[follower];
        projects:[project];
        articles:[article];    
        communities:[community];
    };
    public type register={
        username:Text;
        avatar:Text;
        coveravatar:?Blob;
    };
    public type HashMap<K, V> = HashMap.HashMap<K,V>;
    public type Result<Ok,Err> =Result.Result<Ok,Err>;
}