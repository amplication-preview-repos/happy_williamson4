/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Email } from "./Email";
import { EmailCountArgs } from "./EmailCountArgs";
import { EmailFindManyArgs } from "./EmailFindManyArgs";
import { EmailFindUniqueArgs } from "./EmailFindUniqueArgs";
import { CreateEmailArgs } from "./CreateEmailArgs";
import { UpdateEmailArgs } from "./UpdateEmailArgs";
import { DeleteEmailArgs } from "./DeleteEmailArgs";
import { Client } from "../../client/base/Client";
import { EmailService } from "../email.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Email)
export class EmailResolverBase {
  constructor(
    protected readonly service: EmailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Email",
    action: "read",
    possession: "any",
  })
  async _emailsMeta(
    @graphql.Args() args: EmailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Email])
  @nestAccessControl.UseRoles({
    resource: "Email",
    action: "read",
    possession: "any",
  })
  async emails(@graphql.Args() args: EmailFindManyArgs): Promise<Email[]> {
    return this.service.emails(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Email, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Email",
    action: "read",
    possession: "own",
  })
  async email(
    @graphql.Args() args: EmailFindUniqueArgs
  ): Promise<Email | null> {
    const result = await this.service.email(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Email)
  @nestAccessControl.UseRoles({
    resource: "Email",
    action: "create",
    possession: "any",
  })
  async createEmail(@graphql.Args() args: CreateEmailArgs): Promise<Email> {
    return await this.service.createEmail({
      ...args,
      data: {
        ...args.data,

        client: args.data.client
          ? {
              connect: args.data.client,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Email)
  @nestAccessControl.UseRoles({
    resource: "Email",
    action: "update",
    possession: "any",
  })
  async updateEmail(
    @graphql.Args() args: UpdateEmailArgs
  ): Promise<Email | null> {
    try {
      return await this.service.updateEmail({
        ...args,
        data: {
          ...args.data,

          client: args.data.client
            ? {
                connect: args.data.client,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Email)
  @nestAccessControl.UseRoles({
    resource: "Email",
    action: "delete",
    possession: "any",
  })
  async deleteEmail(
    @graphql.Args() args: DeleteEmailArgs
  ): Promise<Email | null> {
    try {
      return await this.service.deleteEmail(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Client, {
    nullable: true,
    name: "client",
  })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "any",
  })
  async getClient(@graphql.Parent() parent: Email): Promise<Client | null> {
    const result = await this.service.getClient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
