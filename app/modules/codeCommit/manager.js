const simpleGitPromise = require("simple-git")();
let fs = require("fs");

export default class Manger {
  commit = async (requestData) => {
    console.log(requestData);

    fs.writeFile("genesis.json", JSON.stringify(requestData), function (err) {
      if (err) throw err;
      console.log("Saved!");
    });

    // const remote = `https://github.com/lhtvikaschauhan/commit.git`;
    // simpleGit()
    //   .clone(remote)
    //   .then(() => console.log("finished"))
    //   .catch((err) => console.error("failed: ", err));

    const gitHubUrl = `https://github.com/lhtvikaschauhan/commit.git`;

    simpleGitPromise.addRemote("origin", gitHubUrl);

    simpleGitPromise
      //.add("D:/Work/Projects/DLTStack/dltstack-git-service/genesis.json")
      .add(".")
      .then(
        (addSuccess) => {
          console.log(addSuccess);
        },
        (failedAdd) => {
          console.log("adding files failed");
        }
      );

    simpleGitPromise.commit("Intial commit by simplegit").then(
      (successCommit) => {
        console.log(successCommit);
      },
      (failed) => {
        console.log("failed commmit");
      }
    );

    simpleGitPromise.push("-u", "origin", "main").then(
      (success) => {
        console.log("repo successfully pushed", success);
      },
      (failed) => {
        console.log("repo push failed");
      }
    );
    // await simpleGit()
    //   .add("genesis.json")
    //   .commit("first commit!")
    //   .addRemote("origin", "https://github.com/lhtvikaschauhan/commit.git")
    //   .push(["-u", "origin", "main"], () => console.log("done"));
    // // API business logic
    // // return undefined;
  };
}
