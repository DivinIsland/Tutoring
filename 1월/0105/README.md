# 0105복습내용

- ### Git사용

  - git init - 명령어를 사용하면 해당 터미널의 디렉토리에 .git이라는 파일이 생깁니다. 이 파일안에 github의 repository 경로와 branch 등의 정보가 저장되는것으로 추정됩니다.

  

  - git remote add origin [URL] - init로 생성된 .git은 아무런 정보도 담고 있지 않습니다. 그래서 이 명령어를 사용해 자신의 github의 repository를 연결해 줘야 합니다. 연결이 되었다면 remote -v 명령어를 이용해 자신의 github url이 제대로 뜨는지 확인해줍니다. 

    

  - git add *(또는 파일명) - 수정한 파일들이 스테이지에 올라가도록 추가해주는 명령어입니다.

    
  
  - git commit -m '내용' - 스테이지에 올라간 파일들을 커밋 해줍니다. 그래야 github의 branch로 push가 됩니다.
  
    
  
  - git pull/push origin master(branch) - github의 branch에 저장된 파일들을 가져오거나 github으로 보내는 명령어 입니다.
  
    
  
  - git branch '이름' - 새로운 branch를 만듭니다. branch는 작업공간이라고 예를 들수 있습니다. dev1과 dev2라는 branch가 있을 경우 각각 코딩을 해서 github에 업로드 합니다. 가장 최상에 있는 branch를 master branch라고 합니다. origin은 boundary의 일종입니다. master branch위의 더 큰 판이라고 생각하면 됩니다.
  
    
  
  - git checkout 'branch이름' - 현재 터미널에 설정되어있는 branch를 변경하는 명령어입니다.



