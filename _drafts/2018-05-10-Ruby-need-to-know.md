  1 ---
  2 layout: post
  3 title: "Ruby Need To Know While Jekyll"
  4 description: ""
  5 categories: [Ruby]
  6 tags: [ruby]
  7 redirect_from:
  8   - /2018/05/10/
  9 ---
## ruby
### <a href="https://rubygems.org/gems/bundler/versions/1.9.5">bundler</a>

Bundler manages an application's dependencies through its entire life, across many machines, systematically and repeatably


### 学习Ruby你需要了解的相关知识
1. Ruby
    
1. RVM   
    用于帮你安装Ruby环境，帮你管理多个Ruby环境，帮你管理你开发的每个Ruby应用使用机器上哪个Ruby环境。Ruby环境不仅仅是Ruby本身，还包括依赖的第三方Ruby插件。都由RVM管理。

1. Rails

    著名开发框架。详细看 http://zh.wikipedia.org/wiki/Ruby_on_Rails

1. RubyGems

    RubyGems是一个方便而强大的Ruby程序包管理器（ package manager），类似RedHat的RPM.它将一个Ruby应用程序打包到一个gem里，作为一个安装单元。无需安装，最新的Ruby版本已经包含RubyGems了。

    RubyGems简称gems，是 Ruby 的一个包管理器，是一个用于对 Ruby组件进行打包的 Ruby 打包系统。功能类似于Linux下的apt-get。使用它可以方便的从远程服务器下载并安装<a href="https://baike.baidu.com/item/Rails/10962333">Rails</a>。

1. Gem

    Gem是封装起来的Ruby应用程序或代码库。

    在终端使用的gem命令，是指通过RubyGems管理Gem包。

1. Gemfile

    定义你的应用依赖哪些第三方包，bundle根据该配置去寻找这些包。

1. Rake

    Rake是所有需要安装的Gem中最重要的一个，并且它应该始终是你在系统上第一个安装的Gem。Rake是一个构建工具，和Make很相似，但它允许用Ruby来写Rakefile（如何进行构建的定义文件），其中使用了一种特定的DSL（domain-specific language，领域专用语言），在保持Ruby强大功能的同时提供很高的可读性。 Rails用rake扩展来完成多种不容任务，如数据库初始化、更新等。

    Rake is a build language, similar in purpose to make and ant. Like make and ant it's a Domain Specific Language, unlike those two it's an internal DSL programmed in the Ruby language.

1. Rakefile

    Rakefile是由Ruby编写，Rake的命令执行就是由Rakefile文件定义。

    In a gem's context, the Rakefile is extremely useful. It can hold various tasks to help building, testing and debugging your gem, among all other things that you might find useful.

1. Bundle

    相当于多个RubyGems批处理运行。在配置文件gemfilel里说明你的应用依赖哪些第三方包，他自动帮你下载安装多个包，并且会下载这些包依赖的包。

    Bundler maintains a consistent environment for ruby applications. It tracks an application's code and the rubygems it needs to run, so that an application will always have the exact gems (and versions) that it needs to run.

#### 疑问

* bundler 是什么？ bundle 和 bundler 是什么区别？
    * 貌似 bundler 是 名字，实际命令是 bundle

     ```
     gem install bundler
     bundle exec jekyll serve
     ```

### 注意
1. Differences between Gemfile & Gemfile.lock
    
    Gemfile.lock把你的应用变成一个你的代码跟第三方代码最后一次你确定能正常工作的包。 在Gemfile里确切指定你依赖的第三方代码的版本并不能提供同样的保证，因为 gem 通常给它们自己的依赖声明一个版本号的范围。

    你在同一台机器上再次运行bundle install的时候，bundler 会发现系统上已经有了你需要的依赖，然后就会跳过安装的过程。

    如果你运行了bundle pack，你需要的 gem （除了来源是 git 仓库的 gem 以外）都会被下载到vendor/cache目录。如果所有你需要的 gem 都在那个目录里而且你把它放进了版本库里，bundler 运行的时候就不需要联网了。这是一个可选的步骤，因为这样做你的版本库就会变得很大。

1. <a href="https://ruby-china.org/topics/25530">Bundler 的作用及原理</a>
