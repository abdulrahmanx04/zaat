import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import bcrypt from 'bcrypt'
import { UserRole } from "src/common/enums/all.enums";


@Entity('users')
@Index(['verificationToken', 'verificationExpiry'])
@Index(['isVerified'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 50 })
    fullName: string

    @Column({ unique: true })
    email: string

    @Column({ type: 'varchar', unique: true, nullable: true })
    pendingEmail: string | null

    @Column()
    password: string
    @BeforeInsert()
    async hashPass() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @Column({ type: 'varchar', unique: true, length: 13 })
    phone: string

    @Column({ type: 'varchar', nullable: true })
    verificationToken: string | null

    @Column({ type: 'timestamptz', nullable: true })
    verificationExpiry: Date | null

    @Column({ type: 'varchar', nullable: true })
    resetPasswordToken: string | null

    @Column({ type: 'timestamptz', nullable: true })
    resetPasswordExpiry: Date | null

    @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
    role: UserRole

    @Column({ default: false })
    isVerified: boolean

    @Column({ default: true })
    isActive: boolean



    @Column({ type: 'varchar', nullable: true })
    avatar: string | null

    @Column({ type: 'varchar', nullable: true })
    avatarPublicId: string | null

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}