create table portfolio_career (
    id varchar(36) unique not null primary key,
    organization varchar(255),
    role varchar(255),
    location varchar(255),
    start_date varchar(255),
    end_date varchar(255),
    incoming boolean,
    active boolean,
    about varchar(1000)
);
insert into portfolio_career (
        id,
        organization,
        role,
        location,
        start_date,
        end_date,
        incoming,
        active,
        about
    )
values (
        '3a2aa3b1-bf7a-430a-a433-691185c88ba3',
        'UCLA Summer Session',
        '留学生',
        'Los Angeles, United States',
        '2022/08',
        '2022/09',
        true,
        false,
        ''
    );
ALTER TABLE portfolio_career
ADD (
        tag varchar(255),
        created_date DATETIME,
        update_date DATETIME
    );
update portfolio_career
SET tag = 'education'
WHERE id = '3a2aa3b1-bf7a-430a-a433-691185c88ba3';
insert into portfolio_career (
        id,
        organization,
        role,
        location,
        start_date,
        end_date,
        incoming,
        active,
        about,
        tag,
        created_date,
        update_date
    )
values (
        '21db67fe-24ed-4e5c-a178-943898a2560f',
        'GIG Inc',
        'WEBディレクター',
        '日本橋',
        '2023/04',
        null,
        true,
        false,
        null,
        'experience',
        null,
        null
    );
insert into portfolio_career (
        id,
        organization,
        role,
        location,
        start_date,
        end_date,
        incoming,
        active,
        about,
        tag,
        created_date,
        update_date
    )
values (
        '0544f811-c40b-4263-b3b9-2535b3c060ab',
        'Gallery Art Point',
        'インターン',
        '銀座',
        '2022/04',
        null,
        false,
        true,
        null,
        'experience',
        null,
        null
    );
insert into portfolio_career (
        id,
        organization,
        role,
        location,
        start_date,
        end_date,
        incoming,
        active,
        about,
        tag,
        created_date,
        update_date
    )
values (
        '1a1d4042-3cb2-40d1-823a-218fab5e7100',
        'Viviane Inc',
        'インターン',
        '渋谷',
        '2021/03',
        '2021/07',
        false,
        false,
        null,
        'experience',
        null,
        null
    );
insert into portfolio_career (
        id,
        organization,
        role,
        location,
        start_date,
        end_date,
        incoming,
        active,
        about,
        tag,
        created_date,
        update_date
    )
values (
        'b07fe0ed-79b6-4940-9b7c-ad8c81439b6b',
        '東京大学文学部美術史学科',
        null,
        '東京',
        '2021',
        '2023',
        false,
        true,
        null,
        'education',
        null,
        null
    );
update portfolio_career
set location = '米国ロサンゼルス'
where id = '3a2aa3b1-bf7a-430a-a433-691185c88ba3'