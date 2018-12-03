# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Option|
|------|----|------|
|user_name|string|null: false|
|email|text|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups


## messagesテーブル

|Column|type|Opition|
|------|----|-------|
|text|text|null:false|
|image|text|null:true|
|user_id|integer|null:false,foreign_key:true|
|group_id|integer|null:false,foreign_key:true|

### Association
- belongs_to :user
- belomgs_to :group


## groupsテーブル

|Column|type|Opition|
|------|----|-------|
|group_name|string|null:false|

### Association
- has_many :users
- has_many :messages


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

